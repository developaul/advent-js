export default (ovejas) =>  
  ovejas.filter(({name, color}) => { 
    const _name = name.toLowerCase()

    return color === "rojo" &&  
    _name.includes("a") &&
    _name.includes("n")
  })
