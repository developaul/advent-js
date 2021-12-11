const COINS = [ 50, 20, 10, 5, 2, 1 ]

export default change =>
  COINS.reduce((acc, coin) => {
    const quantityCoins = Math.floor(change / coin)

    if(quantityCoins)
      change = Math.floor(change - (coin * quantityCoins))

    return [ quantityCoins, ...acc ]
  }, [])
