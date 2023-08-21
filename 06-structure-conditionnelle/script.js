// Structure IF

let a = true;
if (a) {
    console.log("La valeur de a est vraie !"); // Si a est TRUE, alors j'éxécute mon console.log("La valeur de a est vraie !")
}
console.log("Suite du code");

let b = false;
if (b) {
    console.log("La valeur de a est vraie !"); // Pas éxécuté car condition non remplie
}
console.log("Suite du code sans exécution");

if (a && b) {
    console.log("a et b sont vraies"); // Pas d'éxécution car résultat est FALSE
}

let c = true;
if (a && c) {
    console.log("a et c sont vraies"); // Exécution car résultat est TRUE
}

let D = false;
// on cherche à avoir une condition TRUE dans le if mais valeur de D est FALSE...
if (D) { // D = FALSE et valeur de D toujours FALSE (L30)
    console.log("D est faux"); // Pas d'éxécution parce que D n'est pas TRUE donc pas d'éxecution de if()
}

let d = false;
// on cherche à avoir une condition TRUE dans le if donc: 
if (!d) { // d = true mais valeur de d toujours FALSE (L24)
    console.log("d est faux"); // Exécution
}
// d = false à ce stade du code



// Structure IF ... ELSE

let e = true;
if (e) {
    console.log("e est vraie"); // "e est vraie"
}
else {
    console.log("e n'est pas vraie");
}


if (!e) {
    console.log("e est vraie");
}
else {
    console.log("e n'est pas vraie"); // "e n'est pas vraie"
}
// e = true à ce stade du code



// Structure IF ... ELSE IF

let f = true;
let g = true;
if (f) {
    console.log("f est vraie"); //"f est vraie"
}
else if (g) {
    console.log("g est vraie");
}

let f1 = false;
let g1 = false;
if (f1) {
    console.log("f1 est vraie");
}
else if (g1) {
    console.log("g1 est vraie");
}
// Rien n'est exécuté - Suite du code

let f2 = false;
let g2 = true;
if (f2) {
    console.log("f2 est vraie");
}
else if (g2) {
    console.log("g2 est vraie"); // "g2 est vraie"
}



// Structure IF ... ELSE IF ... ELSE

let i = false;
let j = false;
let k = false;

if (i) {
    console.log("i est vraie");
}
else if (j) {
    console.log("j est vraie");
}
else if (k) {
    console.log("k est vraie");
}
else {
    console.log("i j et k ne sont pas vraies"); // Excécution de console.log("i j et k ne sont pas vraies")
}
// Suite du code


let trafficLight = "clignotant";
if (trafficLight == "green") {
    console.log("On passe");
}
else if (trafficLight == "orange") {
    console.log("On ralentit et on s'arrête");
}
else if (trafficLight == "red") {
    console.log("On stop obligatoirement");
}
else {
    console.log("On regarde le panneau sous le feu tricolore!"); // Exécution
}

// switch SI ET SEULEMENT SI on connaît toutes les valeurs
// Remplace la structure if / else if / else if

switch (trafficLight)
{
    case 'green': // Simple côte pour "parler à la machine"
        console.log("On passe"); // Double côte pour "parler à l'utilisateur"
    break;

    case 'orange':
        console.log("On ralentit et on s'arrête");
    break;

    case 'red':
        console.log("On stop obligatoirement");
    break;

    default:
        console.log("On regarde le panneau sous le feu tricolore!"); // Exécution
}