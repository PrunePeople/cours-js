// Opérateurs d'affectation
// Un opérateur d'affectation affecte une valeur à son opérande gauche selon la valeur de son opérande droit. 

x = f() // sert à définir la valeur d'une variable. 
x += f() // effectue une opération d'addition, PUIS APRES définit/affecte une valeur à la variable
x -= f() // Idem soustraction
x *= f() // Idem multiplication
x /= f() // Idem division


// Exemple:
let a = 5;
a += 5;
// Comme si on écrivait...
a = a + 5; // 10

// POSSIBLE number ou string

// Exemple:
let c = 'Hello';
c += ' there';
console.log(c); // 'Hello there'


// Exemple:
let b = 5;
b -= 5;
// Comme si on écrivait...
b = b - 5; // 0



// Opérateurs de comparaison
// Un opérateur de comparaison compare ses opérandes (à droite et à gauche) et renvoie une valeur logique selon que la comparaison est vraie ou non.
// Renvoie forcément FALSE ou TRUE

let d = 42;
let e = "42";
let f = 50;
let g = 42;


// Egalité (==) //  On regarde si deux valeurs sont identiques
console.log(d == e); 

// Inégalité (!=) // On regarde si deux valeurs sont différentes
console.log(d != e);


// Egalité stricte (===) // On regarde si deux valeurs ET leurs types sont identiques
console.log(d === e); 

// Inégalité stricte (!==) // On regarde si deux valeurs ET leurs types sont différents
console.log(d !== e); 


// Supériorité stricte (>) // On regarde si une valeur est strictement supérieure à une autre
console.log(d > f); 

// Supériorité (>) // On regarde si une valeur est supérieure ou égale à une autre
console.log(d >= g); E


// Infériorité stricte (>) // On regarde si une valeur est strictement inférieure à une autre
console.log(d < f); 

// Infériorité (>) // On regarde si une valeur est inférieur ou égale à une autre
console.log(d <= g);  
 


// Opérateurs arithmétiques
// Un opérateur arithmétique combine des opérandes numériques et renvoie une valeur numérique. 

1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // TRUE


// Incrément (++)
// Un opérateur unaire qui ajoute un à son opérande.
x = 3;
y = x++; // 4 - on affiche x et ensuite on fait l'incrémentation /!\

// Décrément (--)
// Un opérateur unaire qui soustrait un à son opérande.
x = 3;
y = x--; // 2


// Négation unaire 
// Renvoie l'opposé de l'opérande (-)
x = 3;
y = -x; // -3

// Plus unaire (+)
// Renvoie la conversion d'opérande en nombre si ce n'est pas déjà une valeur numérique
x = 3;
y = +"3"; // 3
z = +true; // 1
w = +false; // 0


// Modulo - %
console.log(10 % 2); // 0 - Renvoie le reste entier d'une division de deux opérandes



// Opérateurs logiques
// Les opérateurs logiques sont généralement utilisés avec des valeurs booléennes.

// ET logique (&&)
// Renvoie vrai si et uniquement si ses deux opérandes sont true ou équivalents à true.
const j = 3;
const k = -2;

console.log(j > 0 && k > 0); // FALSE

// OU logique (||)
// Renvoie vrai si et seulement si au moins un de ses opérandes est vrai.
const h = 3;
const i = -2;

console.log(h > 0 || i > 0); // TRUE

// NON logique (!)
// Renvoie l'opposé logique de la valeur fournie par son opérande. Vrai devient faux et vice versa.
const l = 3;
const m = -2;

console.log(!(l > 0 || m > 0)); // FALSE

let n = "azerty"; // string
console.log(n); // string
console.log(!n); // Faux logique
console.log(!!n); // Faux logique inversé, donc, vrai logique, donc Booléen qui vaut TRUE



// Opérateurs conditionnel (ternaire)
// Il permet de se résoudre en une valeur ou en une autre selon une condition donnée.

// Syntaxe de type: condition ? valeur1 : valeur2

let l2 = 42;
let m2 = l2 >= 50 ? "plus grand ou égal" : "plus petit";
console.log(m2);
// (Condition) ? (Exécution si TRUE) : (Exécution si FALSE) ;

const statut = age >= 18 ? 'adulte' : 'mineur';
// Cette instruction affecte la valeur "adulte" à la variable statut si age est supérieur ou égal à 18. 
// Sinon, c'est la valeur "mineur" qui est affectée à statut.



// => : Opérateur de fonction fléchée