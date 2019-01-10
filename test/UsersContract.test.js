//libreria para poder hacer aserciones, nos permite comprobar que los valores que vamos a recuperar 
//del smartcontrat coiciden con los valores que nosotros le proveemos
const assert = require('assert');

//instancia de web3
const Web3 = require('web3');

//provider capa de comunicacion con el servidor
const provider = new Web3.providers.Httpprovider("HTTP://127.0.0.1:7545");

// instancia de web 3 que apunte al servidor
const web3 = new Web3(provider);

const{interface, bytecode} = require("../scripts/compile")


