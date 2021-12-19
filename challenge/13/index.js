export default function wrapGifts(gifts) {
  if (!gifts.length) return []

  const [firstGifts] = gifts

  const width = firstGifts.length + 2

  const result = ['*'.repeat(width)]

  for (let i = 0; i < gifts.length; ++i)
    result.push(`*${gifts[i]}*`)

  result.push('*'.repeat(width))

  return result
}