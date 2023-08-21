// Une fonction est une procédure stockée et nommée
// Sert répéter des instructions à plusieurs endroits du code soit UNIQUEMENT là où on en a besoin 
//CAR JS stock en mémoire la fonction mais ne l'affiche pas tant qu'elle n'est pas appelé!



// Fonction simple
function doSomething () {
    // Procédure = liste d'instructions
}

function sayHello () {
    console.log("Hello There!");
}

// On peut entrer du code entre le lieu de la création/stockage de la fonction et son appel

sayHello();



// Fonction avec paramètre(s) en entrée
function doAnotherThing (a) {
    //Instructions
}


function sayHello2 (userName) {
    console.log(`Hello ${userName}`);
}
sayHello2("John"); // Retourne: Hello John


function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let str_1 = ucFirst("ma chaîne de caractères");
console.log(str_1); // "Ma chaîne de caractères"

let str_2 = ucFirst("hello");
console.log(str_2); // "Hello"

let str_3 = "plop".charAt(0).toUpperCase() + "plop".slice(1);
console.log(str_3); // "Plop"

let str_4 = "yop"
let str_5 = ucFirst(str_4);
console.log(str_5);


function doAnAwasomeThing (a, b, c) {
    // Instructions
    console.log(a); // Retourne "azerty"
    // Respecte l'ordre des paramètres (a en index 0, b en index 1, c en index 2)
}
doAnAwasomeThing("azerty", 42, true);



// Fonction avec sortie de donnée(s)
function doJustAThing () {
    // Instructions

    return value;
}


function addition (p1, p2) {
    console.log(p1 + p2);
}
addition(10, 10); // 20
let result = addition(10, 10); // 20
console.log(10 + 10); // 20
// Trois écritures pour un même résultat


function addition2 (p1, p2) {
    let a = p1;
    let b = p2;
    let c = a + b;
    return c;
}
let result2 = addition2 (10, 2); // 12
console.log(result2 + 10); // 22


function sayHello3 (userName) {
    return `Hello ${userName}`; // La fonction fait un retour de donnée(s)
}
let hello = sayHello3("!"); // On stocke le résultat de la fonction sayHello3 () dans une variable hello
console.log(hello); // Retourne: "Hello !"



// Fonction interne
// Déjà présente dans javascript - comme alert ou prompt - développé par les développeurs de JS

alert("Vous ne passerez paaaas!") // Permet de transmettre un message à l'utilisateur

prompt("On peut poser une question ici"); // Permet de faire rentrer une valeur à l'utilisateur
let name = prompt("Quel est votre nom?"); // réponse stockée dans la variable name
alert(name); // Renvoie à l'utilisateur sa réponse précedemment stockée dans la variable name
alert(`Votre nom est ${name}`);

confirm("Etes-vous d'accord avec le 49.3?");
let isOk = confirm("Etes-vous d'accord avec le 49.34?");
console.log(isOk); // TRUE - confirm renvoie TRUE ou FALSE



// Fonction anonyme
// Une variable qui stock un bloc d'instructions qui ne porte pas de nom
// Intéret: déclarer une fonction dans une variable /!\ pas une bonne pratique /!\
// Permet de déclencher un morceau de code à un moment précis du code

let myFunction = function () {
    // instructions
}

myFunction ();


let btn = document.querySelector('#myBtn1'); // Création de variable qui représente le bouton HTML
btn.addEventListener('click', function() {
    alert("Btn is clicked!");  // Instruction qui ne s'éxécute pas: attend une action de l'utilisateur (appuie sur le bouton) - principe d'asynchronisme
}); // appliquer un évenement à la variable qui déclenche la fonction anonyme

let btn2 = document.querySelector('#myBtn2'); 
btn2.addEventListener('click', function() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(response => response.json()).then(data => console.log(data))  
}); // Récupérer la liste des Pokemon via une API


let btn3 = document.querySelector('#myBtn1'); 
btn3.addEventListener('click', function() { 
});


function sayHello3() {
    alert("Hello there!");
}

sayHello3 (); // déclenche la fonction au chargement de la page

let btnSayHello3 = document.getElementById("btnSayHello3");
btnSayHello3.addEventListener('click', sayHello3()); // on peut appliquer plusieurs evenements 
// sayHello3 => sans les parenthèses: déclenchement à l'appui du bouton 
// sayHello3 => avec parenthèses: déclenchement au chargement de la page
btnSayHello3.addEventListener('mouseenter', function(){ // /!\ avec 'mouseenter' le 'click' est bloqué
    alert("Mouse Enter");
});
// Plusieurs event possible! 'mouseup' 'mouseover' 'dblclick' etc.



// Fonction fléchée
// Permet d’avoir une syntaxe plus courte que les expressions de fonction et ne possède pas ses propres valeurs

fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => response.json()) // response = argument
    // .then((response) => {response.json()}) // Autre manière d'écrire la ligne de code du dessus
    .then(data => console.log(data))  


let btn4 = document.querySelector('#myBtn4'); 
btn4.addEventListener('click', function(event) { // event = argument
    // Instructions
});


let btn5 = document.querySelector('#myBtn5'); 
// btn5.addEventListener('click', event => /* Instruction */); // UNE seule instruction à éxécuter
btn5.addEventListener('click', (event) => {/* Instructions */}); // Possibilité de mettre plusieurs arguments/instructions


let btn6 = document.querySelector('#myBtn6'); 
btn6.addEventListener('click', () => {/* Instructions */});



