export default function checkSledJump(heights) {
  let result = false

  for (let i = 0; i < heights.length; ++i) {
    const currentValue = heights[i]
    const nextValue = heights[i + 1]

    if (currentValue === nextValue) {
      result = false
      break
    }

    if (currentValue > nextValue) result = true

    if (nextValue > currentValue) result = false
  }

  return result
}

