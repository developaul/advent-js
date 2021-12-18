
const SYMBOLS = {
  '.': 1,
  ',': 5,
  ':': 10,
  ';': 50,
  '!': 100
}

export default symbols =>
  symbols.split('')
    .reduce((acc, _symbol, index, _symbols) => {
      const symbolValue = SYMBOLS[_symbol]

      if (!symbolValue || isNaN(acc)) return NaN

      const nextSymbolValue = SYMBOLS[_symbols[index + 1]]

      return (nextSymbolValue > symbolValue) ? acc - symbolValue : acc + symbolValue
    }, 0)

