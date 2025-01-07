class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;

            case "guerreiro":
                ataque = "espada";
                break;

            case "monge":
                ataque = "artes marciais";
                break;

            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "Usou um ataque desconhecido";

         }
         console.log(`O ${this.tipo} está atacando com ${ataque}`);

    }


}

const heroi1 = new hero('Arthur', 30, 'mago'); 
const heroi2 = new hero('Beatrix', 25, 'guerreiro')


heroi1.atacar(); 
heroi2.atacar();
