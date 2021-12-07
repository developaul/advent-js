const keyBy = arr =>
  arr.reduce((acc, value, index) => {
    acc[value] = { value, index }
    return acc
  }, {})

const getResultSumPairs = ({ numbers, keyByNumber, result }) => {

  for (let i = 0; i < numbers.length; ++i) {
    const { value, index } = keyByNumber[result - numbers[i]] || {}

    if (!value || index === i) continue

    return [numbers[i], value]
  }

  return null
}

export default function sumPairs(numbers, result) {
  const keyByNumber = keyBy(numbers)

  return getResultSumPairs({ numbers, keyByNumber, result })
}