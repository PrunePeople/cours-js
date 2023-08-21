"use strict";

/* Modifier propriétés CSS avec le DOM JS:
Permet de modifier certains éléments en JS avec des propriétés CSS 
suivant les variables à un moment T par exemple
*/

// CSS
const div_1 = document.getElementById('div_1'); // cible un noeud HTML & stock dans constante

// Modification du contenu de la constante
div_1.style.color = "red";
div_1.style.backgroundColor = "yellow";

// Création d'un élément
const div_2 = document.createElement('div');

// Modification du contenu de la constante créée
div_2.id = "div_2"; 
div_2.innerText = "Hello <strong>There</strong>!"; // innerText injecte du texte brut dans la balise
div_2.textContent = "John Doe"; // textContent converti une chaine de caractères en noeud HTML
div_2.innerHTML = "Hello <strong>There</strong>!" // innerHTML injecte du texte en format HTML dans une balise en faisant la conversion HTML

// Ajoute un enfant dans la balise parent
div_1.append(div_2);