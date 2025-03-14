class Automovel{
    #codigo
    #marca
    #modelo

    constructor(codigo, marca, modelo){
        this.#codigo = codigo;
        this.#marca = marca;
        this.#modelo = modelo;
    }
    get codigo(){
        return this.#codigo
    }
    imprimir(){
        console.log(`Código: ${this.#codigo}, Marca: ${this.marca}, Modelo: ${this.#modelo}`);
    }

}

module.exports = Automovel;