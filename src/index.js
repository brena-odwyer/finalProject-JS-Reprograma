const { Resource } = require("./Classes/Resource/Resource");
const { User } = require("./Classes/User/User");
const { Admin } = require("./Classes/User/Admin");

//class Resource
const reprograma = new Resource("Reprograma", "https://www.reprograma.com.br/", "technology", "São Paulo", true);
console.log(reprograma)
reprograma.description = "A {reprograma} é uma iniciativa de impacto social que tem como missão diminuir a lacuna de gênero no setor de tecnologia por meio da capacitação profissional em programação de mulheres em situações de vulnerabilidade, priorizando em seus processos seletivos negras, trans e travestis."
console.log(reprograma)
console.log(Resource.allResources)
console.log("---------------------------")

//class User
const brena = new User ("Brena", "brena@gmail.com", "Rio de Janeiro", "back-end developer", false)
console.log(brena)
console.log(User.allUsers)
console.log("---------------------------")

//class Admin
const camila = new Admin ("Camila", "camila@gmail.com", "Rio de Janeiro", "front-end developer", true)
console.log(camila)
console.log(camila.getEmailUser("Brena"))
console.log(camila.getEmailUser("Raquel"))
console.log("---------------------------")