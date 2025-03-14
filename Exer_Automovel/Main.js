const Pessoa = require('./Pessoa');

class Main{
    #pessoa
    constructor(){
        this.#pessoa = []
    }

    addPessoa(Pessoa){
        this.#pessoa.push(Pessoa);
    }
    addAutomovelPessoa(codPessoa, codAuto, marca, modelo) {
        let pessoa = this.#pessoa.find(p => p.codigo === codPessoa);
        if (pessoa) {
            pessoa.inserirAutomovel(new Automovel(codAuto, marca, modelo));
        }
    }

    transfereAutomovel(codPessoaOrigem, codPessoaDestino, codAutomovel) {
        let origem = this.pessoas.find(p => p.codigo === codPessoaOrigem);
        let destino = this.pessoas.find(p => p.codigo === codPessoaDestino);
        if (origem && destino) {
            let automovel = origem.getAutomovel(codAutomovel);
            if (automovel) {
                origem.removerAutomovelByCod(codAutomovel);
                destino.inserirAutomovel(automovel);
            }
        }
    }

    mostrarTodasAsPessoas() {
        this.pessoas.forEach(pessoa => console.log(pessoa.imprimirCompleto()));
    }
}

const main = new Main();
main.addPessoa(new Pessoa(1, "João"));
main.addAutomovelPessoa(1, 1, "Fiat", "Uno");
main.addAutomovelPessoa(1, 2, "Volkswagen", "Fusca");
main.mostrarTodasAsPessoas();
main.addPessoa(new Pessoa(2, "Maria"));
main.transfereAutomovel(1, 2, 1);
main.mostrarTodasAsPessoas();


