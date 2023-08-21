"use strict"

const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const ul = document.querySelector('#pokemons');
const btn = document.querySelector('#getPokemons')

// Petit +:
console.log("AA"); // Execution 1

fetch(url) // elle te promet d'aller chercher du résultat sur une URL // Interogger un serveur et d'envoyer le resultat
    .then( () => {
        console.log("BB"); // Execution 3
    }) // alors je vais récupérer le résultat

console.log("CC"); // Execution 2


btn.onclick = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pokemons = data.results;
            for (const pokemon of pokemons) {
                const li = document.createElement('li');
                li.innerText = pokemon.name;
                ul.append(li);
            }
        })
    ;
}


// OU


function myTest() {
    return "My Test";
}

let f = fetch(url); // On ne peut pas exploiter le résulat la fonction fetch
console.log(f); // Promise {<pending>}

fetch(url).then(response => console.log(response)); // Response {type: 'cors', url: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', redirected: false, status: 200, ok: true, …}
fetch(url)
    .then(response => response.json()) // role de la methode json: converti un objet en format .json (fichier text)
    // .then(data => console.log(data)) // {count: 1281, next: null, previous: null, results: Array(1281)}
    // .then(data => console.log(data.results)) // (1281) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, 
    // {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, 
    // {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
    .then(data => { // lorsque les données ont été converties en json, on exécute le second "then" qui récupère les données json dans la variable "data"
        const pokemons = data.results;
        for (const pokemon of pokemons) {
            const li = document.createElement('li');
            li.innerText = pokemon.name;
            ul.append(li);
        }
    })

let t = myTest();
console.log(t); // My Test



// Petit +:
let response = await fetch(url); // /!\ Ne marche pas: await se met dans une fonction asynchrone


// PAS A PAS


// Etape 1:
function getPokemons() {
    // let response = await fetch(url);

    return "POLP";
}
let p = getPokemons();
console.log(p); // POLP

// Etape 2:
async function getPokemons2() {
    // let response = await fetch(url);

    return "POLP";
}
let p2 = getPokemons2();
console.log(p2); // Promise {<fulfilled>: 'POLP'}

// Etape 3:
async function getPokemons3() {
    let response = await fetch(url);
    console.log(response);  // Response {type: 'cors', url: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', redirected: false, status: 200, ok: true, …}
}
let p3 = getPokemons3();
console.log(p3); // Promise {<pending>}

// Etape 4:
async function getPokemons4() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data); // {count: 1281, next: null, previous: null, results: Array(1281)}
}
let p4 = getPokemons4();
console.log(p4); // Promise {<pending>}

// Etape 5:
async function getPokemons5() {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
let p5 = getPokemons5();
console.log(p5); // Promise {<pending>}

// Etape 6:
async function getPokemons6() {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
let p6 = await getPokemons6();
console.log(p6); // Promise {<pending>}

// Etape 7:
async function getPokemons7() {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
// Type de fonction immédiate:
// (function () {})();
(async function() {
    let p7 = await getPokemons7();
    console.log(p7); // Promise {<pending>}
})


// Fonction générique:
async function getData() {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
(async function() {
    let pokemons = await getData();
    console.log(pokemons); 
})

// OU

async function getData() {
    try { // essaye d'eéxuter du code. Si une seule erreur, n'envoie pas d'erreur mais...
        let response = await fetch(url);
        let data = await response.json();
        return data.results;
    }
    catch(e) { // ... envoie instructions de catch
        console.warn(`Erreur sur l'api Pokemon à l'adresse ${url} - ${e}`);
        return [];
    }
}
(async function() {
    let pokemons = await getData();
    console.log(pokemons); 
})


// Final:
async function getData() {
    try { // essaye d'eéxuter du code. Si une seule erreur, n'envoie pas d'erreur mais...
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
    catch(e) { // ... envoie instructions de catch
        return [];
    }
}
// Fonction immédiate:
(async function() {
    let pokemons = await getData();
    console.log(pokemons);

    for (const pokemon of pokemons) {
        const li = document.createElement('li');
        li.innerText = pokemon.name;
        ul.append(li);
    }
})();



// Petit +:
// console.log("ceci est un log");
// console.warn("ceci est un warn");
// console.error("ceci est un error");
// console.error("ceci est un error");

// let fruits = ["Pommes", "Poires", "Bananes"];
// console.log(fruits);
// console.table(fruits);