class Vector3 {
    /**
     * @param {number} x - The coordinate X (default 0)
     * @param {number} y - The coordinate Y (default 0)
     * @param {number} z - The coordinate Z (default 0)
     */
    constructor(x=0, y=0, z=0){
        this.x = x
        this.y = y
        this.z = z

        /**
         * @param {Vector3} V - Sum this Vector with V
         */
        this.add = function(V){
            this.x += V.x
            this.y += V.y
            this.z += V.z
            return this
        }

        /**
         * @param {Vector3} V - Return the distance between points
         */
        this.distance = function(V){
            return Math.sqrt(Math.pow(this.x - V.x, 2) +
                             Math.pow(this.y - V.y, 2) +
                             Math.pow(this.z - V.z, 2))
        }
    }
}

module.exports = Vector3