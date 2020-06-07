var Vector3 = require('./math/Vector3')
var Circle = require('./math/Circle')

let v1 = new Vector3().add(new Vector3(2, 1, 3))
console.log(v1)

let c1 = new Circle(v1, 2)
console.log(c1.distance(new Circle(new Vector3(7, 4, 12), 1.5)))