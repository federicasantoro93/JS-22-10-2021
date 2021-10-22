/*
//Nel caso in cui utilizzo una primitiva creo una copia
//... E cambiando una variabile non modifico le altre


let arrUno = ['Primo valore', 'Secondo Valore'];

let arrDue = arrUno;
let arrTre = arrDue;

arrUno.push('Terzo valore');

console.log(arrTre);
console.log(arrDue);

//Console 
//['Primo valore', 'Secondo Valore', Terzo valore]
//['Primo valore', 'Secondo Valore', Terzo valore]

//Nel caso in cui utilizzo un object creo una reference 
//...E se la modifico, la modifico in tutte le variabili associate

------------------

Object

let person = {
name: 'Athur', // nome proprietà: valore --> proprietà
}

-----------------

let schedaProdotto = {
    nome: 'Maglia', //string
    peso: 20, //number
    prezzo: 30.00,
    descrizione: 'Questa è la descrizione della maglia',
    codice: '12ehfgdush',
    disponibile: 'false', //boolean
    colore:['giallo', 'verde', 'rosso',], //array
    'promozione-giornaliera': {
        dataInizio: 16/10/2021,
        dataFine: 18/12/2021,
    }, //Oggetto dentro oggetto
    
}
 console.log( schedaProdotto['nome'] );
 console.log( schedaProdotto['prezzo'] );
 console.log( schedaProdotto['promozione-giornaliera'] );

// Console:
// Maglia
// 30.00
// dataInizio: 16/10/2021, dataFine: 18/12/2021

console.log( schedaProdotto.disponibile);
//Console:
//false

----------

let schedaProdotto = {
    nome: 'Maglia', //string
    peso: 20, //number
    prezzo: 30.00,
    descrizione: 'Questa è la descrizione della maglia',
    codice: '12ehfgdush',
    disponibile: 'false', //boolean
    colore:['giallo', 'verde', 'rosso',], //array
    promozione: {
        dataInizio: 16/10/2021,
        dataFine: 18/12/2021,
    }, //Oggetto dentro oggetto
    
}
 
console.log( schedaProdotto.promozione.dataInizio);

console.log( schedaProdotto.colore[1] );
//Console: verde

-------------

let schedaProdotto = {
    nome: 'Maglia', //string
    peso: 20, //number
    prezzo: 30.00,
    descrizione: 'Questa è la descrizione della maglia',
    codice: '12ehfgdush',
    disponibile: 'false', //boolean
    colore:['giallo', 'verde', {rosso1: 'rosso', rosso2: 'altrorosso'}], 
    promozione: {
        dataInizio: 16/10/2021,
        dataFine: 18/12/2021,
    }, //Oggetto dentro oggetto
}
 

console.log( schedaProdotto.colore[2].rosso2 );
//Console: altrorosso

----------------

let schedaProdotto = {
    nome: 'Maglia', //string
    peso: 20, //number
    prezzo: 30.00,
    descrizione: 'Questa è la descrizione della maglia',
    codice: '12ehfgdush',
    disponibile: 'false', //boolean
    colore:['giallo', 'verde', {rosso1: 'rosso', rosso2: 'altrorosso'}], 
    promozione: {
        dataInizio: 16/10/2021,
        dataFine: 18/12/2021,
    }, //Oggetto dentro oggetto
    getColore: function(qualeColore) {
        return this.colore[qualeColore];
    }
}
 
console.log( schedaProdotto.getColore(0) );
//Console: giallo
//This si utilizza all'interno di un oggettto... 
//...per dire che stiamo lavorando al suo interno
//This è paragonabile a un pronome personale...
//...usato per evitare di riscrivere il nome proprio di una persona

---------------------------

let schedaProdotto = {
    nome: 'Maglia', //string
    peso: 20, //number
    prezzo: 30.00,
    sconto: 18.00,
    descrizione: 'Questa è la descrizione della maglia',
    codice: '12ehfgdush',
    disponibile: 'false', //boolean
    colore:['giallo', 'verde', {rosso1: 'rosso', rosso2: 'altrorosso'}], 
    promozione: {
        dataInizio: 16/10/2021,
        dataFine: 18/12/2021,
    }, //Oggetto dentro oggetto
    getColore: function(qualeColore) {
        return this.colore[qualeColore];
    },
    getSconto: function()
    {
        return this.prezzo - this.sconto;
    }
}
 
console.log( schedaProdotto.getSconto() );
//Console: 12
//In questo modo ottengo il prezzo già scontato
------------------------

let schedaProdotto = {
    nome: 'Maglia', //string
    peso: 20, //number
    prezzo: 30.00,
    sconto: 18.00,
    descrizione: 'Questa è la descrizione della maglia',
    codice: '12ehfgdush',
    disponibile: 'false', //boolean
    colore:['giallo', 'verde', {rosso1: 'rosso', rosso2: 'altrorosso'}], 
    promozione: {
        dataInizio: 16/10/2021,
        dataFine: 18/12/2021,
    }, //Oggetto dentro oggetto
    getColore: function(qualeColore) {
        return this.colore[qualeColore];
    },
    getSconto: function()
    {
        return this.prezzo - this.sconto;
    }
}

for( let key in schedaProdotto )
{
    console.log(schedaProdotto[key]);
}

------------

let schedaProdotto = {
    nome: 'Maglia', //string
    peso: 20, //number
    prezzo: 30.00,
    sconto: 18.00,
    descrizione: 'Questa è la descrizione della maglia',
    codice: '12ehfgdush',
    disponibile: 'false', //boolean
    colore:['giallo', 'verde', {rosso1: 'rosso', rosso2: 'altrorosso'}], 
    promozione: {
        dataInizio: 16/10/2021,
        dataFine: 18/12/2021,
    }, //Oggetto dentro oggetto
    getColore: function(qualeColore) {
        return this.colore[qualeColore];
    },
    getSconto: function()
    {
        return this.prezzo - this.sconto;
    }
}

schedaProdotto['stampa'] = ['gatto', 'Cane', 'Faro', 'ecc'];

console.log(schedaProdotto);
//Console 
//{nome: 'Maglia', peso: 20, prezzo: 30, sconto: 18, descrizione: 'Questa è la descrizione della maglia', …}
//codice: "12ehfgdush"
//colore: (3) ['giallo', 'verde', {…}]
//descrizione: "Questa è la descrizione della maglia"
disponibile: "false"
getColore: ƒ (qualeColore)
getSconto: ƒ ()
nome: "Maglia"
peso: 20
prezzo: 30
promozione: {dataInizio: 0.0007916872835230085, dataFine: 0.0007422068283028204}
sconto: 18
stampa: (4) ['gatto', 'Cane', 'Faro', 'ecc']
[[Prototype]]: Object
-------------------------

let schedaProdotto = {
    nome: 'Maglia', //string
    peso: 20, //number
    prezzo: 30.00,
    sconto: 18.00,
    descrizione: 'Questa è la descrizione della maglia',
    codice: '12ehfgdush',
    disponibile: 'false', //boolean
    colore:['giallo', 'verde', {rosso1: 'rosso', rosso2: 'altrorosso'}], 
    promozione: {
        dataInizio: 16/10/2021,
        dataFine: 18/12/2021,
    }
}

for( let proprieta in schedaProdotto){

console.log(proprieta);
}

console.log("test");

//Console: nome proprieta

------------

let schedaProdotto = {
    nome: 'Maglia', //string
    peso: 20, //number
    prezzo: 30.00,
    sconto: 18.00,
    descrizione: 'Questa è la descrizione della maglia',
    codice: '12ehfgdush',
    disponibile: 'false', //boolean
    colore:['giallo', 'verde', {rosso1: 'rosso', rosso2: 'altrorosso'}], 
    promozione: {
        dataInizio: 16/10/2021,
        dataFine: 18/12/2021,
    }
}

for( let proprieta in schedaProdotto){

console.log(schedaProdotto['nome']);
}

console.log("test");

//Console: Maglia

---------

let schedaProdotto = {
    nome: 'Maglia', //string
    peso: 20, //number
    prezzo: 30.00,
    sconto: 18.00,
    descrizione: 'Questa è la descrizione della maglia',
    codice: '12ehfgdush',
    disponibile: 'false', //boolean
    colore:['giallo', 'verde', {rosso1: 'rosso', rosso2: 'altrorosso'}], 
    promozione: {
        dataInizio: 16/10/2021,
        dataFine: 18/12/2021,
    }
}

for( let proprieta in schedaProdotto){

console.log(schedaProdotto[proprieta]);
}

console.log("test");

//Console: Maglia
//appunti.js:298 20
//appunti.js:298 30
//appunti.js:298 18
appunti.js:298 Questa è la descrizione della maglia
appunti.js:298 12ehfgdush
appunti.js:298 false
appunti.js:298 (3) ['giallo', 'verde', {…}]
appunti.js:298 {dataInizio: 0.0007916872835230085, dataFine: 0.0007422068283028204}
appunti.js:301 test
----------------

let schedaProdotto = {
    nome: 'Maglia', //string
    peso: 20, //number
    prezzo: 30.00,
    sconto: 18.00,
    descrizione: 'Questa è la descrizione della maglia',
    codice: '12ehfgdush',
    disponibile: 'false', //boolean
    colore:['giallo', 'verde', {rosso1: 'rosso', rosso2: 'altrorosso'}], 
    promozione: {
        dataInizio: 16/10/2021,
        dataFine: 18/12/2021,
    }
}

for( let proprietà in schedaProdotto)
{
console.log( type of proprietà);
}

for( let proprieta in schedaProdotto){
    if(typeof schedaProdotto[proprieta] === 'number')
    {
console.log(schedaProdotto[proprieta]);}
}

//Console: 20 30 18
----------


let stringaUno = "Calzolaio";
let stringaDue = "CalZOlaio";

console.log( stringaUno.toLowerCase() == stringaDue.toLowerCase() );

//Console:true
// .toLowerCase mi permette di restituire le parole tutto in minuscolo

----------

let stringaDue = "CALZOLAIO";
stringaDue.toLowerCase();
console.log(stringaDue);

//Console:CALZOLAIO
---------------

let stringaDue = "CALZOLAIO";
stringaDue = stringaDue.toLowerCase();
console.log(stringaDue);

//Console: calzolaio

----------

let cart = [];
let stringaUno = 'calzolaio';
let stringaDue = "calZOLAIO";

if(stringaUno.toLowerCase() != stringaDue.toLowerCase())
{
    cart.push(stringaUno);
}

console.log( stringaDue);
//Console: calzolaio

------------
*/

let stringaDue = "calZOLAIO";

let copia = stringaDue.toLowerCase();

console.log( stringaDue);
console.log(copia);

//Console: calZOLAIO
//Console: calzolaio

