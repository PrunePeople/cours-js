"use strict";

// Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais.*

const maPromesse = new Promise((resolve, reject) => { // on affecte la creation d'une nouvelle fonction qui retourne une promesse
                                                      // resolve: fonction qui s'éxecute quand promesse est effectuée correctement
                                                      // sinon reject
    setTimeout(() => { // On retarde l'éxecution du code de x ms 
        resolve('toto'); // Execution 3
    }, 3000); // 3000 ms = 3s

    console.log("aaaaaa"); // Execution 1
});
  
maPromesse
    .then(gestionnaireSuccesA, gestionnaireEchecA) // si promesse est valide, resolve exécute gestionnaireSuccesA, sinon reject exécute gestionnaireEchecA
    .then(gestionnaireSuccesB, gestionnaireEchecB)

function gestionnaireSuccesA(data) {
    console.log("Succès A " + data);
}

function gestionnaireEchecA(data) {
    console.log("Echec A " + data);
}

function gestionnaireSuccesB(data) {
    console.log("Succès B " + data);
}

function gestionnaireEchecB(data) {
    console.log("Echec B " + data);
}

function test() {
    return "My test"; // Execution 2
}
console.log(test()); // Execution 1

