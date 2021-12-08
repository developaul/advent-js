const recursive = ({ store, product }) => {

  for(const key in store ) {
    const value = store[key]

    if(value instanceof Object) {
      if(recursive({ store: store[key], product })) 
        return true
    }

    if(store[key] === product) 
      return true
  }

  return false
}

export default (store, product) => recursive({ store, product })
