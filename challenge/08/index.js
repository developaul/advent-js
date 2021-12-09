export default function maxProfit(prices) {

  for (let i = 0, values = [...prices]; i < Math.ceil(prices.length / 2); ++i) {
    const maxPrice = Math.max(...values)
    const minPrice = Math.min(...values)
    const maxPriceIndex = values.indexOf(maxPrice)
    const minPriceIndex = values.indexOf(minPrice)

    if (minPriceIndex < maxPriceIndex)
      return maxPrice - minPrice

    values.splice(minPriceIndex, 1)
    values.splice(maxPriceIndex, 1)
  }

  return -1
}