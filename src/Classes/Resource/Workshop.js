const { Resource } = require("./Resource")

class Workshop extends Resource {
    date;
    mode;

    constructor(date, mode){
        super()
        this.date = date;
        this.mode = mode;
    }

    get workshopInformation() {
        return `The workshop ${this.name} is ${this.mode} on ${this.date}`
    }
}

module.exports = { Workshop }