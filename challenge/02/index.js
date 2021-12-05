export default letter => 
  letter
    .split(' ')
    .reduce((listGifs, gif) => {
      const _gif = gif.trim()

      if(!_gif) return listGifs

      if(_gif.startsWith('_')) return listGifs

      const gifValue = listGifs[_gif] 
      listGifs[_gif] = gifValue ? (gifValue + 1) : 1

      return listGifs
    }, {})
