"use strict";
// Permet de faire du JS STRICT qui ne permet AUCUNE erreur

// DOM: Document Object Model
/*
Le DOM est une représentation structurée du document sous forme « d’arbre » 
crée automatiquement par le navigateur. Chaque branche de cet arbre se termine 
par ce qu’on appelle un nœud qui va contenir des objets. 
On va finalement pouvoir utiliser ces objets, leurs propriétés et leurs méthodes en JavaScript.
*/


// Sélecteur "getElement"
// Beaucoup plus rapide en exécution

// Sélecteur d'Id
const elId = document.getElementById('myId');
console.log(document); // #document + code HTML
console.log(elId); // <div id="myId">Selecteur d'ID</div> -> NOEUD HTML

// Sélecteur de classe
const elClass = document.getElementsByClassName('myClass');
console.log(elClass); // HTMLCollection [div.myClass] -> Retourne un tableau de noeuds HTML

// Sélecteur de type
const elType = document.getElementsByTagName('span');
console.log(elType); // HTMLCollection [span]

// Sélecteur de l'attribut de nom
const elName = document.getElementsByName('firstname');
console.log(elName); // NodeList [input]


// Sélecteur "Query"
// Plus facile à utiliser car ressemble aux sélecteurs CSS

// Sélecteur d'Id
const elId2 = document.querySelector('#myId'); // /!\ Ne pas oublier le #
console.log(elId2); // Retourne la même chose que L16

// Sélecteur de classe
const elClass2 = document.querySelector('.myClass'); // /!\ Ne pas oublier le .
console.log(elClass2); // <div class="myClass">Selecteur de classe</div>

const elClass3 = document.querySelectorAll('.myClass'); // All retournera toujours un tableau
console.log(elClass3); // NodeList(3) [div.myClass, div.myClass, div.myClass]

// Sélecteur de type
const elType2 = document.querySelector('span');
console.log(elType2); // <span>Selecteur de type</span>

// Sélecteur de l'attribut
const elAttr = document.querySelector('[data-price]');
console.log(elAttr); // <div data-price="42">Selecteur d'attribut'</div>