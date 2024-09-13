const express = require("express");
const app = express();


app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index");
});


app.get("/clientes", (req, res) => {
 const ListaClientes = [{
    nome: "Éric", cpf: "123.456.789.10", endereco: "Rua dos Predios"
 }, 
 {
    nome: "Enzo", cpf: "754.789.435.20", endereco: "Rua do Lago"
 },
 {
    nome: "João Paulo", cpf: "654.234.890.30", endereco: "Rua da Praça"
 },
 {
    nome: "Antonio", cpf: "342.456.765.40", endereco: "Rua do Comercio"
 }];
    res.render("clientes", {ListaClientes:ListaClientes});
});

app.get("/produtos", (req, res) => {
const listaProdutos = [{
  nomeProd: 'Pagani Zonda', preco: 39.99, categoria: 'Supercarro'
},
{
  nomeProd: 'Audi RS6', preco: 1200000.00, categoria: 'SuperEsportivo'
},
{
  nomeProd: 'BMW M3 Touring', preco: 530000.00, categoria: 'Super carro'
},
{
  nomeProd: 'Volkswagen Parati', preco: 25000.00, categoria: 'Super carro'
}
];

  res.render("produtos", {listaProdutos: listaProdutos});
});

app.get("/pedidos", (req, res) => {
  listaCompras = [{
    nome: "Bugatti Veyron", preco: 16000000.00, categoria:"Supercarro"
  },
  {
    nome: "Renault Sander", preco: 80000.00, categoria:"Compactos"
  },
  {
    nome: "Mitsubishi Lancer Evo", preco: 200000.00, categoria:"Esportivo"
  },
  {
    nome: "Mazda Rx7", preco: 100000.00, categoria:"Esportivo"
  }
]

listaVendas = [{
  nome: "Ferrari La Ferrari", preco: 16000000.00, categoria:"Supercarro"
},
{
  nome: "Audi RSQ8", preco: 1200000.00, categoria:"SUV"
},
{
  nome: "Fiat palio", preco: 29000.00, categoria:"Compactos"
},
{
  nome: "BWM Isetta", preco: 60000.00, categoria:"Compactos"
}
]



  res.render("Pedidos", {listaCompras: listaCompras, listaVendas: listaVendas});
});

//config da porta do sistema de loja
const port = 8080;
app.listen(8080, function (error) {
  if (error) {
    console.log(`O erro é: ${error}`);
  } else {
    console.log(`Conectado com sucesso. http://localhost:${port}`);
  }
});
