// Chaîne de caractère (string)
let str_1 = "Ceci est une chaîne de caractères.";

console.log(str_1);
console.log(typeof str_1);

let str_2 = 'Ceci est une autre chaîne de caractères, d\'aujourd\'hui';

console.log(str_2);
console.log(typeof str_2);

let str_3 = `Ceci est une autre chaîne de caractères, d'aujourd'hui 2`;

console.log(str_3);
console.log(typeof str_3);


// Concaténation de chaîne
let firstname = "John";

console.log("Bonjour "+firstname); //un peu plus lente à l'exécution
console.log("Bonjour ".concat(firstname));
console.log(`Bonjour ${firstname}`);


// Les nombres (numbers)
let num_1 = 42;
console.log(num_1);
console.log(typeof num_1);

let num_2 = "42"; //pas un nombre
console.log(num_2);
console.log(typeof num_2);

let num_3 = 21.5; //symbole de la décimale: "."
console.log(num_3);
console.log(typeof num_3);

let num_4 = 12 + "AZERTY"; 
console.log(num_4);
console.log(typeof num_4); //string

let num_5 = 12 + "10"; 
console.log(num_5);
console.log(typeof num_5); //string

let num_6 = 12 * "abc"; 
console.log(num_6);
console.log(typeof num_6); //NaN number - NaN(Not a Number)


// Les Booléens (booleans/bool)
let bool_1 = true;
console.log(bool_1);
console.log(typeof bool_1);


// Les tableaux (Array) = Collection de données = Plusieurs données

// A l'ancienne
let arr_1 = new Array(); // new = instance d'une classe ET classe = modèle d'objet
console.log(arr_1);
console.log(typeof arr_1);

// Récent
let arr_2 = []; 
console.log(arr_2);
console.log(arr_2.length); //longueur = propriété
console.log(typeof arr_2);

let arr_3 = ['Pomme','Poire', 'Banane', 'Kiwi', 'Fraise']; 
console.log(arr_3[1]); //appel 'Poire'
console.log("J'aime les " + arr_3[4] + "s");
console.log(`J'aime les ${arr_3[4]}s`); //Formulation demandée
console.log('J\'aime les '.concat(arr_3[4]).concat('s'));
console.log(arr_3.length);

let arr_4 = [10]; //une entrée de valeur 10
arr_4.push('Banane');
console.log(arr_4);
console.log(arr_4.length);

let arr_5 = new Array(10); //10 entrées de valeur nulle
arr_5.push('Banane');
console.log(arr_5);
console.log(arr_5.length);


// Les Objets (objects) = Collection de données = Plusieurs données

let obj_1 = new Object();
console.log(obj_1);
console.log(typeof obj_1);

let obj_2 = {};
console.log(obj_2);
console.log(typeof obj_2);

let arr_6 = ['John', 'DOE', 25];
console.log(arr_6);
console.log(arr_6[1]);

let obj_3 = {firstname: "BOB", lastname: "DOE", age: 28};
console.log(obj_3.firstname); // pas de CROCHET mais un POINT = Parcourir des objets

let user = {firstname: "BOB", lastname: "DOE", age: 28};
console.log(user.firstname); // Plus facile à comprendre "Un bon code peut se passer de commentaires"


let obj_4 = { string: "azerty", number: 42, bool: true, objet: {}, array: [], fnc: function(){}};
console.log(obj_4);
console.log(typeof obj_4); //objet



function calculPrixTTC(){

const TVA = 20;
var montantTVA;
var prixHT;
var prixTTC;

var prixHT = prompt("Merci de rentrer un prix HT", "");

montantTVA = prixHT * (TVA/100); // OK - 2
prixTTC = prixHT + montantTVA; // Pas ok - 10 + 2 = 102
alert(prixTTC);


if(prixHT != Number) {
    alert("Merci de rentrer un chiffre");
}
else {
    calculPrixTTC();
}
alert("Prix HT: " + prixHT + "Prix TTC: " + prixTTC);

}