//Parte de codigo da documentação do curso de objeto, não faz parte dos exercícios.
var pessoa = {
  nome: ['Bob', 'Smith'],
  idade: 32,
  sexo: 'masculino',
  interesses: ['música', 'esquiar'],
  bio: function() {
    alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
  },
  saudacao: function() {
    alert('Oi! Eu sou ' + this.nome[0] + '.');
  },
  nome: {
    primeiro:'bob',
    segundo:'mendonça',
  },
};

var myDataName = 'altura';
var myDataValue = '1.75m';
pessoa[myDataName] = myDataValue;



//Exercício 1 - In this task you are provided with an object literal, and your tasks are to:
//* Store the value of the name property inside the catName variable, using bracket notation.
//* Run the greeting() method using dot notation (it will log the greeting to the browser's console).
//* Update the color property value to black.

//===codigo dado:
const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log('Meow!');
  }
};
// ===Resolução===
cat['name'] = 'Caty';
cat['color'] = 'black';
cat.greeting()
console.log(cat.color)


//Exercício 2 - you to have a go at creating your own object literal to represent one of your favorite bands. The required properties are:
// name: A string representing the band name.
// nationality: A string representing the country the band comes from.
// genre: What type of music the band plays.
// members: A number representing the number of members the band has.
// formed: A number representing the year the band formed.
// split: A number representing the year the band split up, or false if they are still together.
// albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
// name: A string representing the name of the album.
// released: A number representing the year the album was released.
// Include at least two albums in the albums array.

// Once you've done this, you should then write a string to the variable bandInfo, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.

const band = {
  name: 'Bring me the Horizon',
  nationality: 'british',
  genre: ['rock', ' alternative rock', ' alternative metal', ' Metalcore', ' pop-rock', ' electronic rock', ' deathcore'],
  members: 7,
  formed: 2004,
  split: 'false',
  albums:[{name:'The Bedroom Sessions', released: 2004}, {name: 'amo', released: 2019}, {name:"that's the spirit", released: 2015}],
};
let bandInfo = `The ${band.nationality} band ${band.name} composed of ${band.members} members, are formed since ${band.formed} playing musics of genres between ${band.genre}. Their first album was ${band.albums[0].name} in ${band.albums[0].released}.`
console.log(bandInfo)

//Exercício 3 - Nesta tarefa, queremos que você retorne ao literal do objeto cat da Tarefa 1. Queremos que você reescreva o método greeting() para que ele registre "Olá, disse Bertie, o Cymric". para o console do navegador, mas de uma maneira que funcione em qualquer objeto cat da mesma estrutura, independentemente de seu nome ou raça 

const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function(){
    console.log(`Hello, said ${this.name} the ${this.breed}. `)
  }
};

//Exercício 4 - In this task we want you to improve the code so greeting() is only defined once, and every cat instance gets its own greeting() method. Hint: you should use a JavaScript constructor to create cat instances.

function cat(name, breed, color, message){
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.message = `Hello, I'm ${this.name}, I'm a little ${this.breed} and my hair is ${this.color}.`;
};

const myCat = new cat('gisele', 'gordinha', 'laranja');
console.log(myCat)
