class Tintas{
    constructor(id,descricao,ativo,estoque,preco,Validade,QualoUso){
        this.ativo = ativo;
        this.estoque = estoque;
        this.descricao = descricao;
        this.id = id;
        this.preco = preco;
        this.Validade = Validade;
        this.QualoUso = QualoUso;

    }
ativar(){
    this.ativo = true;
}
retirarEstoque(quantidade){
    if(this.ativo){
        if(quantidade < 0){
            console.log("Impossivel realizar, produto fora de estoque")
        }
        else if(quantidade == 0){
            console.log("Impossivel realizar, produto inexistente ")
        }
        else if(this.estoque < quantidade){
            console.log("Impossivel retirar, quantidade maior do que temos no estoque")
        }
        else{
            this.estoque = this.estoque - quantidade
        }
    }
}

AdicionarEstoque(quantidade){
    if(this.ativo){
        if(quantidade < 0){
            console.log("Impossivel realizar, produto fora de estoque")
        }
        else if(quantidade == 0){
            console.log("Impossivel realizar, produto inexistente ")
        }
        else{
            this.estoque = this.estoque + quantidade
        }
    }
}
}

let TintaAquarela = new Tintas(1,"Tinta Aquarela",false,10,50,"Até dois anos depois de aberta","Uso em paredes de concreto.")
TintaAquarela.ativar()
const leia = require("prompt-sync")()
let opcao=""
id = 1

do{
    console.log("SUVINIL")
    console.log("SUA LOJA DE TINTAS FAVORITA\n\n\n\n")


    console.log("DESEJA FAZER COMPRAS?S/N: \n")
    opcao = leia("DIGITE A SUA OPÇÃO: ")

    if(opcao =="S"){
        console.log("CADASTRO INICIAL DO PRODUTO")
        let descricao = leia("DIGITE A DESCRICAO DO PRODUTO:")
        let preco = parseInt(leia("DIGITE O PRECO UNITARIA DO PRODUTO:"))
        for(let x = 1; x < 5; x++){
            console.log("VENDA"+x)
            console.log("PRODUTO"+TintaAquarela.id)
            console.log("DESCRIÇÃO: "+TintaAquarela.descricao)
            console.log("ESTOQUE: "+TintaAquarela.estoque)
            let quantidade = parseInt(leia("QUANTOS PRODUTOS DESEJA COMPRAR: "))
            TintaAquarela.retirarEstoque(quantidade)
            console.log("VALOR A PAGAR"+(TintaAquarela.preco*quantidade))
            console.log("ESTOQUE ATUAL: "+TintaAquarela.estoque)
            
        }
        console.log("------------------------------")
        console.log("PRODUTO\n\n\n\n\n"+id)
        console.log("DESCRIÇÃO: \n"+TintaAquarela.descricao)
            console.log("ESTOQUE: \n\n\n\n\n\n\n\n\n\n"+TintaAquarela.estoque)
            let quantidade = parseInt(leia("QUANTOS PRODUTOS DESEJA COMPRAR PARA O ESTOQUE: "))
            this.estoque.AdicionarEstoque(quantidade)

    }
}

while(opcao=="N"){
    console.log("ESPERAMOS VOCE DA PROXIMA VEZ")
}