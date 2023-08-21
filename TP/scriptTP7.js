// Ecrire une fonction qui compte le nombre d'une lettre definie dans une chaine

// exemple : countLetter("e", "Hello There !"); // 3

function countLetter (letter, string) { 
    let count = O; // initialisé à O; 
    for (let i = 0; i < string.lenght; i ++) {
        if (string.charAt(i).toLowerCase() === letter.toLowerCase()) { 
            // charAt() renvoie une nouvelle chaîne contenant le caractère (ou, plus précisément, le point de code UTF-16) à la position indiquée en argument.
            count ++;
        }
    }
    return count;
}
console.log(countLetter("e", "Hello There!"));


// Petit +:
const arr = ["Chien", "abricot", "électron","résistance", "Tomate", "abricot"];
const sortedArray = arr.sort(function (a, b) { // Tri le tableau par ordre alphabétique
    return a.localeCompare(b); 
    // localeCompare() renvoie un nombre indiquant si la chaîne de caractères courante se situe avant, après ou est la même que la chaîne passée en paramètre
});
console.log(sortedArray); 


// Petit +:
var array1 = [1, 2, 3];
var array2 = [2,3,4,5];
console.log(array1.filter(e => array2.includes(e)));
// Renvoie les objets inclus et égaux dans les deux tableaux


// Petit +:
const str = 'The quick brown fox jumps over the lazy dog.';
const strCopy = str.split([""]);
console.log(strCopy); // Permet d'avoir un tableau de chaque caractère de str
// ['T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x',
// ' ', 'j', 'u', 'm', 'p', 's', ' ', 'o', 'v', 'e', 'r', ' ', 't', 'h', 'e', ' ', 'l', 'a', 'z', 'y', ' ', 'd', 'o', 'g', '.']








function countLetter(a, str) {

var strCopy = str.split([""]);
console.log(strCopy);

var aCopy = a.split([""]);
console.log(aCopy);

console.log(strCopy.filter(e => aCopy.includes(e)));
// 

}

console.log(countLetter("e", "Hello There")); // Retourne le nombre de e dans la chaîne de caractères MAIS ne prend pas en compte minuscule/majuscules



