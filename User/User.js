class User {
    name;
    email
    #city;
    profession;
    #mother;

    static allUsers = []

    constructor (name, email, city, profession, mother){
        this.name = name;
        this.email = email;
        this.#city = city;
        this.profession = profession;
        this.#mother = mother;
        this.constructor.allUsers.push({name: this.name, email: this.email})
    }

}

module.exports = { User }