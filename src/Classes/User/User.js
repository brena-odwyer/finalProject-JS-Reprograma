class User {
    name;
    email
    #city;
    profession;
    #mother;
    #id;

    static allUsers = []
    static count = 0

    constructor (name, email, city, profession, mother){
        this.name = name;
        this.email = email;
        this.#city = city;
        this.profession = profession;
        this.#mother = mother;

        this.constructor.allUsers.push({name: this.name, email: this.email})
        this.#id = ++ User.count
    }


}


module.exports = { User }