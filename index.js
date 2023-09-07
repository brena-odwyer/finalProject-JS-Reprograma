const { Resource } = require("./Resource/Resource")

const reprograma = new Resource("Reprograma", "https://www.reprograma.com.br/", "technology", "São Paulo", true);
console.log(reprograma)
reprograma.description = "A {reprograma} é uma iniciativa de impacto social que tem como missão diminuir a lacuna de gênero no setor de tecnologia por meio da capacitação profissional em programação de mulheres em situações de vulnerabilidade, priorizando em seus processos seletivos negras, trans e travestis."
console.log(reprograma)
console.log(Resource.allResources)