import { PRICING_CONFIG } from '../data/pricing.js';

export const LOGO_SRC = '/images/logo.jpg';
export const FALLBACK_IMG = '/images/logo.jpg';

export const isImagePath = (path) =>
  typeof path === 'string' && (path.startsWith('http') || path.startsWith('/images/'));

export const applyPsychologyValue = (val) => {
  if (val > 0 && val % 100 === 0) return val - 1;
  if (val > 0 && val % 50 === 0) return val - 1;
  return val;
};

export const calculateDynamicPrice = (productId, mode, design, selectedModel) => {
  let tier = 'standard';

  if (mode === 'pro' && selectedModel) {
    const brand = selectedModel.brand?.toLowerCase();
    if (['apple', 'samsung'].includes(brand)) {
      if (
        selectedModel.name.toLowerCase().includes('ultra') ||
        selectedModel.name.toLowerCase().includes('pro max')
      ) {
        tier = 'elite';
      } else {
        tier = 'standard';
      }
    } else if (['nothing', 'oneplus', 'asus'].includes(brand)) {
      tier = 'value';
    }
  } else if (mode === 'easy' && design.manualModel) {
    const manual = design.manualModel.toLowerCase();
    if (manual.includes('iphone') || manual.includes('ultra') || manual.includes('macbook')) {
      tier = 'elite';
    } else if (manual.includes('nothing') || manual.includes('oneplus')) {
      tier = 'value';
    }
  }

  let base = PRICING_CONFIG.tiers[productId]?.[tier] || PRICING_CONFIG.tiers[productId]?.standard || 199;
  let total = base;
  const breakdown = [{ label: `${tier.toUpperCase()} Base Rate`, value: base }];

  const isPremiumLevel = productId === 'phone' || productId === 'laptop';

  if (design.text) {
    const textPrice = isPremiumLevel ? 0 : PRICING_CONFIG.addons.text;
    if (textPrice > 0) {
      total += textPrice;
      breakdown.push({ label: 'Text Personalization', value: textPrice });
    } else {
      breakdown.push({ label: 'Text Personalization', value: 'Included' });
    }
  }

  if ((design.photoCount || 0) > 0) {
    const photoCharge =
      PRICING_CONFIG.addons.photo +
      Math.max(0, design.photoCount - 1) * PRICING_CONFIG.addons.extraPhoto;
    total += photoCharge;
    breakdown.push({ label: `${design.photoCount}x Elements`, value: photoCharge });
  }

  if ((design.extraColorCount || 0) > 0) {
    const colorCharge = design.extraColorCount * PRICING_CONFIG.addons.extraColor;
    total += colorCharge;
    breakdown.push({ label: 'Extra Pigments', value: colorCharge });
  }

  if (design.pattern && design.pattern !== 'none') {
    total += PRICING_CONFIG.addons.basicDesign;
    breakdown.push({ label: 'Sticker/Texture', value: PRICING_CONFIG.addons.basicDesign });
  }

  if (design.hasHandArt) {
    total += PRICING_CONFIG.addons.handArt;
    breakdown.push({ label: 'Hand Art Upgrade', value: PRICING_CONFIG.addons.handArt });
  } else if (design.effect && design.effect !== 'none') {
    total += PRICING_CONFIG.addons.basicDesign;
    breakdown.push({ label: 'Material Finish', value: PRICING_CONFIG.addons.basicDesign });
  }

  const finalTotal = applyPsychologyValue(total);
  return { total: finalTotal, breakdown };
};
