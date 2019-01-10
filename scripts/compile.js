// importo librerias js node
// Este archivo nos ayudara a compilar el smart contrat con node, 
// esto lo hace por nostrors un framework cono trufle 

//rutas
const path = require('path');
//ficheros en disco
const fs = require('fs');
//compilador de solidity previamente instalado
const solc = require('solc');

//importamos chalk
const chalk = require('chalk');

const contractPath =  path.resolve(__dirname,"../contracts","UsersContract.sol"); //__dirname directorio actual ,  ../ baje un nivel

//Para leer el codigo fuente
const source = fs.readFileSync(contractPath,'utf8');

//para ver en consola lo que contiene el contrato UsersContract.sol
//console.log(source);

//compilar smart Contract
//[':UsersCntract'] hace referencia al objeto que estamos compilando
// porque dentro de un .sol pueden haber varios contratos
//Retorna varios elementos, pero necesitamos interface y bitecode
//const{interface, bytecode} = solc.compile(source,1).contracts[':UsersContract'];

//intalamos chalk libreria de node para ver pintar en consola
//npm install chalk --save-dev

//console.log(chalk.green(bytecode));
//console.log(chalk.cyan(interface));//(ABI application binary interface : json)
//para ejecutar: node compile.js

//conexion con servidor deganache
module.exports = solc.compile(source,1).contracts[':UsersContract'];
