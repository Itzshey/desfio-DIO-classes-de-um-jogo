class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atack(){
        if(this.tipo === "mago"){
            console.log("O heroi " + this.nome + " de tipo " + this.tipo + " usou magia")
        } else if (this.tipo === "monge"){
            console.log("O heroi " + this.nome + " de tipo " + this.tipo + " usou artes marciais")
        } else if (this.tipo === "guerreiro"){
            console.log("O heroi " + this.nome + " de tipo " + this.tipo + " usou espada")
        } else if (this.tipo === "ninja"){
            console.log("O heroi " + this.nome + " de tipo " + this.tipo + " usou shuriken")
        }
    }
}

const nome = ["Frederico", "Jefferson", "Marco"]
const idade = [13, 26, 45]
const classe = ["mago","monge","guerreiro"]

for(i = 0; i <= nome.length; i++){
    const novoHeroi = new heroi (nome[i], idade[i], classe[i]);
    novoHeroi.atack()
}

