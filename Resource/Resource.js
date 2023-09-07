class Resource {
    name;
    website;
    theme;
    city;
    online;
    description;


    static allResources = [];

    constructor(name, website, theme, city, online) {
        this.name = name;
        this.website = website;
        this.theme = theme;
        this.city = city;
        this.online = online;
        this.constructor.allResources.push({name: this.name})
    }

    set description(newDescription){
        this.description = newDescription
    }

    get description() {
    return this.description
    }

}


module.exports = { Resource }