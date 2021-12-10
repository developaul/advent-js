const keyByFn = ({ rv, key, value }) => {
  rv[key] = rv[key] || []
  rv[key].push(value)

  return rv
}

const keyByValue = ({ rv, key, value }) => {
  rv[value[key]] = rv[value[key]] || []
  rv[value[key]].push(value)

  return rv
}

export default function groupBy(collection, it) {
  const isFn = it instanceof Function

  return collection.reduce((rv, value) =>
    (isFn) ?
      keyByFn({ rv, value, key: it(value) }) :
      keyByValue({ rv, value, key: it })
    , {})
}
