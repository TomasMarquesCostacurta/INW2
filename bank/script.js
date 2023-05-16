

class Conta{
    constructor(numero,saldo, cpf, ativo){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo;
    }

    ativar(){
        this.ativo = true;
    }

    credito(valor){
        if(this.ativo){
            console.log("Conta ativa, purgatory maybe")
            this.saldo += valor
        }
        else if(){
            console.log("Conta inativa, acorda porra")
        }
         
    }
    debito(valor){
        if (this.ativo){
        if(valor<0){
            console.log("Impossivel realizar, valor negativo, sem saldo noob lol skill issue")
        }
        else if(valor ==0){
            console.log("Impossivel realizar, valor zerado, tão pobre que os cara tão te mandando ar kkkkkk")
        }
        else if(valor<=this.saldo){
            console.log("Impossivel realizar saldo indisponivel, pobre do crl lol kkkkkk")
        }
        else{
            this.saldo -= valor
        }
    }
    else{
        console.log("Conta inativa mlq burro ")
    }
    }
}



const leia = require("prompt-sync")()
let numero = leia("Digite o numero da conta: ")
let cpf = leia("Digite o cpf da conta:")
let c1 = new Conta(numero,cpf,0,false)
let op=""
c1.ativar()
for(let x=1; x<=10; x++){
    console.log("Movimento : "+x)
    console.log("Saldo atual conta : "+c1.saldo,)
    op = leia("Digite D - debito ou C para credito : ")
    if(op =="D"){
        valor = leia("Digite o valor para debito :")
        c1.debito(valor)
    }
    else if(op =="C"){
        valor = leia("Digite o valor para credito :")
        c1.credito(valor)
    }
    console.log("Saldo atual conta: " +c1.saldo)
}

console.log("Saldo final da conta" +c1.saldo)