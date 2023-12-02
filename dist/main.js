"use strict";
/*TEMA 1: Types*/
/*-----Tipos de datos primitivos----*/
let nombre = 'Rodrigo'; //->Declaramos varibles de String
let age = 20; //->Tipo numero
let bolean = true; //->Tipo boleano
let und = undefined; //->Indefindo
let nulo = null; //->Nulo
/*--ARRAYS--*/
let frutas = ['🍇', '🍉', '🍐']; //->Lista de datos sin que ts infiera
let frutasInferiendo = ['🍇', '🍉', '🍐']; //->Lista de datos inferir
/*--TUPLAS--*/ //->Es similar a un array pero este sabe cuantos elementos tiene el array y que tipos son
let tuplaPlayer = ['Rodrigo', 20, true];
//Tupla de array
let players;
players = [
    [1, 'Andre'],
    [2, 'Carlos']
];
/*----Enums----*/
var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["admin"] = "ADMIN";
    Roles["superAdmin"] = "SUADMIN";
})(Roles || (Roles = {}));
console.log(Roles.User);
const objeto = {
    nombre: 'RODRIGO',
    age: 20
};
/*----Funciones----*/
function saludar(name) {
    console.log(`Hola ${name}`);
}
;
saludar('Rodrigo');
function escribir(text) {
    return text;
}
let salida = escribir('escribiendo');
console.log(salida);
;
const auto = {
    marca: 'Mazda',
    year: 2023
};
// Uso de la interfaz extendida
const estudiante = {
    nombre: "Juan",
    edad: 20,
    grado: "Universidad"
};
/*----POO----*/
/*class User{
  public name: String; //->Publica
  public age: Number;
  constructor(name: String , age: Number){
    this.name = name,
    this.age = age
  }
}

const user1 = new User('Rodrigo',20);
console.log(user1);*/
class User {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    //Geters and setters
    getName() {
        return this.name;
    }
    //Setter para setear
    setName(newName) {
        this.name = newName;
    }
}
const user1 = new User('Rodrigo', 20);
console.log(user1.getName()); //->Por consola Rodrigo
user1.setName('Andre');
console.log(user1.getName()); //->Se actualizo el dato a André
