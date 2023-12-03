/*TEMA 1: Types*/

/*-----Tipos de datos primitivos----*/
let nombre:String = 'Rodrigo';//->Declaramos varibles de String
let age:Number = 20;//->Tipo numero
let bolean:boolean = true;//->Tipo boleano
let und:undefined = undefined//->Indefindo
let nulo:null = null //->Nulo

/*----TYPES----*/
type nombre = "Rodrigo";

/*--ARRAYS--*/
let frutas:String[] = ['🍇', '🍉', '🍐'];//->Lista de datos sin que ts infiera
let frutasInferiendo= ['🍇', '🍉', '🍐'];//->Lista de datos inferir

/*--TUPLAS--*///->Es similar a un array pero este sabe cuantos elementos tiene el array y que tipos son
let tuplaPlayer:[String,Number,boolean] = ['Rodrigo',20,true];

//Tupla de array
let players:[Number,String][];
players = [
  [1,'Andre'],
  [2,'Carlos']
];

/*----Enums----*/
enum Roles{
  User = "USER",
  admin  = "ADMIN",
  superAdmin = "SUADMIN"
}
console.log(Roles.User);

/*----Objectos----*/
type Person = {
  nombre: String,
  age: Number
}

const objeto: Person = {
  nombre: 'RODRIGO',
  age: 20
}

/*----Funciones----*/
function saludar(name:String):void{//->Una funcion tradicional que no devuelve nada por eso ponemos el void que significa vacio
  console.log(`Hola ${name}`);
};
saludar('Rodrigo');
function escribir(text:String){//->No usamos el void porque retornaremos algo
  return text;
}
let salida = escribir('escribiendo');
console.log(salida);

/*----Interface----*/
interface Automovil{//->Las interfaces usamos cuando almacenaremos varios tipos de datos a diferencias de los tipos
  marca: String,
  year: Number
};

const auto: Automovil = {
  marca: 'Mazda',
  year: 2023
};

// Definición de la interfaz base
interface Persona {
  nombre: string;
  edad: number;
}

// Definición de la interfaz extendida
interface Estudiante extends Persona {
  grado: string;
}

// Uso de la interfaz extendida
const estudiante: Estudiante = {
  nombre: "Juan",
  edad: 20,
  grado: "Universidad"
};

/*----Interfaces complejas----*/
interface Client {
  nombre: string;
  edad: number;
  address: Address;
}

interface Address{
  id: number,
  country: string
}

const employee: Client = {
  nombre: 'Rodrigo',
  edad: 20,
  address: {
    id: 1,
    country: 'Ohaio'
  }
}
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

/*--Implementando una interfaz */

interface Xmen {
  name: String;
  age: number;
}
class User implements Xmen{
  public name: String;
  public age: number;
  constructor(name: String , age: number){
    this.name = name,
    this.age = age
  }
  //Geters and setters sirven para los privados
  getName(): String {
    return this.name;
  }
  //Setter para setear
  setName(newName: String): void{
    this.name =  newName;
  }
}

const user1 = new User('Rodrigo',20);
console.log(user1.getName()); //->Por consola Rodrigo
user1.setName('Andre');
console.log(user1.getName());//->Se actualizo el dato a André

/*----DESTRUCTUTING DE OBJETOS----*/
type Autos = {
  marca: String,
  year: number
};


const objAuto: Autos = {
  marca: 'mazda',
  year: 2023
}

const {marca,year}:Autos = objAuto;
