class ContaBancaria{
    #saldo
    constructor(valorIncial){
        this.valorIncial = _valorinicial;
    }
        depositar(valor){
            this.#saldo += valor;
        }

        sacar(valor){
            if(valor <= this.#saldo){
                return  this.#saldo -= valor;
            }else{
                'Erro';
            }
        }

    get saldo(){
        return this.#saldo;
    }
    imprimir(){
        console.log()
    }

}