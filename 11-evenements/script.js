"use strict"

// Avant de pouvoir écouter un évènement il faut cibler un noeud HTML

// Simple click
const btn_1 = document.querySelector('#btn_1'); // Permet de cibler un noeud HTML dans le DOM
                                                // querySelector parcours dans le document le 1er noeud HTML qui correspond à l'id

btn_1.addEventListener('click', (event) => { // Quand j'ai l'évenement click j'amorce les instructions
    //  addEventListener: écouteur d'évènement (type d'evenemnt attendu, action à exécuter, options)
    console.log(event); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
                        // Informations qui concerne l'évènement
    console.log("Simple Click");

    btn_1.style.backgroundColor = "red"; // Fait réference au noeud HTML ciblé au dessus

    event.target.style.backgroundColor = "green"; // event.target: Fait référence au noeud/élément HTML qui déclenche l'évènement
    event.target.style.fontSize = "2rem";
});

// OU

btn_1.onclick = event => {
    event.target.style.backgroundColor = "green";
    event.target.style.fontSize = "2rem";
}


// Double click
const div_1 = document.querySelector('#div_1');

div_1.addEventListener('dblclick', event => {
    console.log(`Double Click sur ${event.target.id}`); // Double click sur la proriété id de la cible qui a permit de déclencher l'evenement
});


// Mouse over/out: simulation de la pseudo-classe :hover CSS
const div_2 = document.querySelector('#div_2');

div_2.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = "red";
});

div_2.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = "green";
});


// KeyUp - Key: touche du clavier Up: relâche la touche
const el_firstname = document.getElementsByName('firstname'); // cible une liste d'élements par l'attribut name
const elFirstname = document.getElementsByName('[name=firstname]');
const el_firstnameLog = document.querySelector('#keyUpLog');
console.log(el_firstname); // NodeList (1) [input]
console.log(el_firstname[0]); // <input type="text" name="firstname">

el_firstname[0].addEventListener('keyup', event => { // Pas d'écouteur d'évènemnt sur un tableau donc on rajoute l'index 0: [O]
    el_firstnameLog.innerHTML = event.target.value;
});


// KeyDown - Key: touche du clavier Down: enfonce la touche
const el_lastname = document.querySelector('[name=lastname');
const el_lastname_log = document.querySelector('#keyDownLog');

console.log(el_lastname); // <input type="text" name="lastname">

el_lastname.addEventListener('keydown', event => { 
    el_lastname_log.innerHTML = event.target.value;
});

// OU

el_lastname.onkeydown = (event) => {
    el_lastname_log.innerHTML = event.target.value;
}


// KeyPress - Key: touche du clavier Down: touche enfoncée
const el_nickname = document.querySelector('[name=nickname');
const el_nickname_log = document.querySelector('#keyPressLog');

console.log(el_nickname);

el_nickname.onkeypress = (event) => {
    el_nickname_log.innerHTML = event.target.value;
}


// OnChange1 - Quand on quitte le champ
const el_email = document.querySelector('[name=email');
const el_email_log = document.querySelector('#onChangeLog_1');

console.log(el_email);

el_email.onchange = (event) => {
    el_email_log.innerHTML = event.target.value;
}


// OnChange2 - Quand on quitte le champ
const el_gender = document.querySelector('[name=gender');
const el_gender_log = document.querySelector('#onChangeLog_2');

console.log(el_gender);

el_gender.onchange = (event) => {
    el_gender_log.innerHTML = event.target.value;
}