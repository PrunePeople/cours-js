"use strict"

// Ecrire un document HTML
// -> uns balise <div id="counter">
// -> Bouton <button xxxx>Click Me</button>

const btn1 = document.querySelector('#btn');
console.log(btn1); // <button id="btn" style="color: green;">Click me</button>
const counter1 = document.querySelector('#counter');
console.log(counter1); // <div id="counter" style="color: red;"></div>

let countClick1 = 0;

counter1.innerHTML = countClick1; // Permet d'afficher la valeur de countClick directement dans le doc navigateur
// Pas obligatoire car L20 affiche à partir de 1 click

btn1.addEventListener('click', () => { // addEventListener permet de détecter le click sur le bouton
    console.log("BTN IS CLICKED !"); // Message qui apparaît dans la console lors d'un click sur le bouton
    countClick1++;
    console.log(countClick1); // affiche l'indentation lorsque l'on click sur le bouton
    counter1.innerHTML = countClick1;
})


// OU


const btn = document.querySelector('#btn');
const counter = document.querySelector('#counter');
let countClick = 0;

function showCounter () {
    counter.innerHTML = countClick;
}

btn.addEventListener('click', () => {
    countClick++;
    showCounter ();
})
showCounter ();


// OU


var nombreClics = 0; // Initialisation à 0

function comptage() {
  nombreClics ++; // nombreClics = nombreClics + 1
  document.getElementById("nombreClics").textContent = nombreClics; 
  // Récupére l'Id "nombreClics" convertit en noeud HTML et on lui affecte la valeur de nombreClics
}

document.getElementById("boutonClic").addEventListener("click", comptage);


// Petit +:
// Modification de la couleur de la div
const div_1 = document.getElementById('counter');
div_1.style.color = "red";

// Modification de la couleur du bouton
const button_1 = document.querySelector('button');
button_1.style.color = "green" ;