class User {

    /**
     * @param {string} Name - Uer's name
     * @param {string} Email - User's email
     * @param {number} Age - User's age
     */
    constructor(Name, Email, Age){
        this.name = Name
        this.email = Email
        this.age = Age

        /** @type {string[]} - User's comments*/
        this.comments = []
    }

}

module.exports = User