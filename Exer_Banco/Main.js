const ContaBancaria = require ('./ContaBancaria');

let obj = new ContaBancaria(100);
obj.sacar(50);
obj.depositar(200);
obj.saldo();