import { pricePlaceholder } from '@shared/consts/placeholders.js'

export const getPriceRangeString = (priceMin, priceMax) => {
  if (!priceMin || !priceMax) return pricePlaceholder

  return `от ${priceMin
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} до ${priceMax
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`
}
