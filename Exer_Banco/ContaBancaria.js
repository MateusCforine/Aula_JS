class ContaBancaria{
    #saldo
    constructor(_saldo){
        this.#saldo = _saldo;
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
    saldo(){
        console.log(`Saldo Atual: ${this.#saldo}`);
    }

}
module.exports = ContaBancaria;