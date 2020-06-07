var Vector3 = require('./Vector3')

class Circle {

    /**
     * @param {Vector3} center - The point of the center (default (0, 0, 0))
     * @param {number} r - The radius of the circle (default 1)
     */
    constructor(center = new Vector3(), r=1){
        this.center = center
        this.radius = r


        /**
         * @param {Circle} C - Return the distance between centers of the circles
         */
        this.distance = function(C){
            return this.center.distance(C.center)
        }
    }

}

module.exports = Circle