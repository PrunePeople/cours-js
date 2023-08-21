let ageUser = 21;

if (ageUser < 13) {
    console.log("l'utilisateur est un bébé");
}
else if (ageUser < 18 && ageUser >= 13) {
    console.log("l'utilisateur est un ado");
}
else {
    console.log("l'utilisateur est adulte");
}


let age = 21;

if (age >= 18) {
    console.log("l'utilisateur est un adulte");
}
else if (age >= 13) {
    console.log("l'utilisateur est un ado");
}
else {
    console.log("l'utilisateur est un bébé");
}


// Instructions 1
let l = 42;
let m; // OU let m = undefined;

// plus grand ou égal OU plus petit

if (l > 50) {
    m = "plus grand ou égal"
}
else {
    m = "plus petit"
}
console.log(m);


// Instructions 1, écrit aussi comme ça -- Condition ternaire:
let l2 = 42;
let m2 = l2 >= 50 ? "plus grand ou égal" : "plus petit"; // (Opérande condition) ? opérande si condition est TRUE : opérande si condition est FALSE
console.log(m2);
// (Condition) ? (Exécution si TRUE) : (Exécution si FALSE) ;


let ageUser2 = 21;
let isAdult = age >= 18 ? true : false;

if (isAdult) {
    console.log("Je suis adulte");
}
else {
    console.log("Je ne suis pas adulte");
}