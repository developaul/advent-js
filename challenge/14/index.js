export default function missingReindeer(ids) {
  const sortedIds = ids.sort((a, b) => a - b)

  if (!sortedIds.includes(0))
    return 0

  return sortedIds.reduce((acc, id, index, _sortedIds) => {
    const nextId = _sortedIds[index + 1]
    const posibleId = id + 1

    if (nextId && posibleId !== nextId)
      return posibleId

    return acc
  }, sortedIds[sortedIds.length - 1] + 1)
}
