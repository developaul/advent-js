const generateTreeTrunk = ({  height, width, middle }) => {
  let treeTrunk = ''

  for(let i = 0; i < height; ++i) {
    const treeLevel = new Array(width).fill('_')
    treeLevel.splice(middle, 0, '#')
    treeLevel.length = width
    treeTrunk += `${treeLevel.join('')}${(i < height - 1) ? '\n' : '' }`
  }

  return treeTrunk
}

const generateTreeLeaves = ({ height, width, middle }) => {
  let treeLeaves = ''

  for(let i = 0, q = 1; i < height; ++i, q += 2) {
    const treeLevel = new Array(width).fill('_')
    treeLevel.splice(middle - Math.floor(q / 2), 0, ...new Array(q).fill('*'))
    treeLevel.length = width
    treeLeaves += `${treeLevel.join('')}\n`
  }

  return treeLeaves
}

export default function createXmasTree(height) {
  const width = height + (height - 1)
  const middle = Math.floor(width / 2)

  const treeLeaves = generateTreeLeaves({ width, height, middle })
  const treeTrunk = generateTreeTrunk({ width, height: 2, middle })

  return treeLeaves.concat(treeTrunk)
}