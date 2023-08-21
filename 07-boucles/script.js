// Boucle FOR - Sert à répéter plusieurs fois une ou plusieurs instructions

console.log(0);
console.log(1);
console.log(2);
console.log(3);

// OU

for (let i = 0; i < 5; i++) { // i: convention car i => "itération"
// parametre 1 = initialisation de la boucle = a quelle valeur je vais commencer la boucle; 
// parametre 2 = condition de bouclage = jusqu'à où je peux répéter la boucle = "tant que i est...";
// parametre 3 = incrémentation = ce qu'on veut faire faire à i à chaque boucle)
    console.log(i);
}
// Soit: la boucle commence à i = O ET tant que i est strictement inférieur à 4, on continue à rajouter 1 à i


let fruits_a = ["Pommes", "Poires", "Bananes", "Kiwis"];
for (let i = 0; i < fruits_a.length; i++) {
    console.log(fruits_a[i]);
}


// Boucle WHILE
let i = 0;
while (i <= 6) { // tant que i est inférieur ou égal à 3, on boucle
    console.log(i);
    i++;
}

let fruits_b = ["Pommes", "Poires", "Bananes", "Kiwis"];
while (fruits_b.length) {
    console.log(fruits_b[0]);
    console.log(fruits_b);
    fruits_b.shift(); // je supprime l'index concerné par la boucle
}



// Boucle DO... WHILE

let j = 10;
do {
    console.log(j);
} while (j < 10); 
// 10

let k = 100;
do { // do s'éxécute au moins une fois le code avant de tester si elle peut continuer à exécuter le code
    console.log(k);
} while (k < 10);



// Fonction asynchrone
// Exemple: fonction forEach

let fruits_c = ["Pommes", "Poires", "Bananes", "Kiwis"];
for (let i = 0; i < fruits_c.length; i++) {
    console.log(`${i} - ${fruits_c[i]}`); // "O - Pommes" "1 - Poires" etc
    console.log(`${i+1} - ${fruits_c[i]}`); // "1 - Pommes" etc
} 


fruits_c.forEach(fruit => console.log(fruit)); // variable fruit : itération en cours 
// pour chaque ligne de mon tableau je prend la valeur de la ligne que je stock dans la variable fruit

let a = [
    2, 
    23, 
    56, 
    787];
a.forEach( n => console.log(n));


let fruits_d = ["Pommes", "Poires", "Bananes", "Kiwis"];
fruits_d.map(fruit => console.log(fruit)); // mapper : cartographier le tableau et le parcourir

console.log(fruits_d);


const user = {
    firstname: "Bruce",
    lastname: "Wayne",
    'super-power': "de la thunas"
};

for (const key in user) { // in comme index
    // console.log(key); // retourne les clefs de l'objet
    console.log(user[key]); // retourne les clefs de l'objet
    console.log(user.key); // ne marche pas
}
console.log(user.firstname); 
console.log(user['super-power']); 


let fruits_e = ["Pommes", "Poires", "Bananes", "Kiwis"];
for (const data of fruits_e) {
    console.log(data);
}