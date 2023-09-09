const { User } = require("./User")

class Admin extends User {


    getEmailUser(userName) {
        const user = User.allUsers.find(user => user.name === userName)

        return user ? user.email : `This user does not exist`
    }

}

module.exports = { Admin }