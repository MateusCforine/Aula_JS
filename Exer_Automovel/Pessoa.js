class Pessoa{
    #codigo
    #nome
    #automovel

    constructor(codigo, nome, automovel){
        this.#codigo = codigo;
        this.#nome = nome;
        this.#automovel = [];
    }

    get codigo(){
        return this.#codigo
    }

    get nome(){
        return this.#nome
    }

    inserirAutomovel(automovel){
        this.#automovel.push(automovel)
    }
    
    removerAutomovelByCod(codigo) {
        this.#automovel = this.#automovel.filter(auto => auto.codigo !== codigo);
    }

    getAutomovel(codigo) {
        return this.#automovel.find(auto => auto.codigo === codigo) || null;
    }

    imprimir() {
        return `Código: ${this.#codigo}, Nome: ${this.#nome}`;
    }
    imprimirCompleto() {
        return `Código: ${this.#codigo}, Nome: ${this.#nome}\nAutomóveis: ${this.#automovel.length ? this.#automovel.map(a => `\n  ${a.imprimir()}`).join('') : "\n  Nenhum automóvel registrado."}`;
    }
    
}

module.exports = Pessoa;