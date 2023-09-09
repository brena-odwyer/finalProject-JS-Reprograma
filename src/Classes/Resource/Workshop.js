const { Resource } = require("./Resource")

class Workshop extends Resource {
    date;
    mode;

    constructor(name, website, theme, city, online, date, mode){
        super(name, website, theme, city, online)
        this.date = date;
        this.mode = mode;
    }

    get workshopInformation() {
        return `The workshop ${this.name} is ${this.mode} on ${this.date}`
    }
}

module.exports = { Workshop }