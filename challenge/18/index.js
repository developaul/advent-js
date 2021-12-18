export default function fixFiles(files) {
  const { fixedFiles } = files.reduce((acc, file) => {
    const quantity = acc.fileCounter[file] || 0

    acc.fixedFiles.push(quantity ? `${file}(${quantity})` : file)

    acc.fileCounter[file] = quantity + 1

    return acc
  }, { fixedFiles: [], fileCounter: {} })

  return fixedFiles
}