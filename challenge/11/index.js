const NORMAL_TICKET_PRICE = 12,
  LOYALTY_CARD_PRICE = 250

const calculateLoyaltyPrice = times => {
  let totalPrice = 0

  for (let i = 1; i <= times; ++i) {
    totalPrice += NORMAL_TICKET_PRICE * Math.pow(0.75, i)
  }

  return totalPrice
}

export default function shouldBuyFidelity(times) {
  const normalPrice = NORMAL_TICKET_PRICE * times

  const loyaltyPrice = LOYALTY_CARD_PRICE + calculateLoyaltyPrice(times)

  return loyaltyPrice < normalPrice
}