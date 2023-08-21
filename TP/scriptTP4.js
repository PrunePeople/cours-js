// Ecrire une fonction qui retourne un objet avec le nombre de personnage 
// Masculin et le nombre de personnage Féminin

// Exemple de sortie : {male: 4, female: 3}

const users = [
    {
        name: "Eileen",
        gender: "F"
    },
    {
        name: "James",
        gender: "M"
    },
    {
        name: "John",
        gender: "M"
    },
    {
        name: "Marty",
        gender: "M"
    },
    {
        name: "Jane",
        gender: "F"
    },
    {
        name: "Leïa",
        gender: "F"
    },
    {
        name: "Luc",
        gender: "M"
    },
];

function getStats(users) { // Ne faut pas appel au tableau [users]  
        let m = O; // initialisation des variables à 0!!
        let f = O;

        for (const user of users) { // Une boucle sur le tableau [users], à chaque itiréation, on extrait une ligne 
                                    // que l'on stock dans la constante user qui sera réinitialisé à chaque nouvelle ligne

            switch (user.gender) { // comme un if/else // user.gender -> descend dans la propriété gender de [users]
                case "M": m++;
                break; // arrête l'instruction L64
                case "F": f++;
                break;
            
            // OU
                // case "M": m = m + 1;
                // break;
                // case "F": f = f + 1;
                // break;
            }

            // OU
            // if (user.gender === "F") {
            //     m++;
            // }
            // else if (user.gender === "M") {
            //     f++;
            // }
        }

        return { // permet de ressortir un résultat MANIPULABLE: calculs de "m" et "f", sinon console -> 'undefined'
            m: m,
            f: f,
        } 
}
// La fonction devient le type de ce qu'elle retourne, ici, un objet

const stats = getStats(users); // appel de la constante déclaré [users] plus haut
console.log(stats);
// console.log(stats.f); // affiche uniquement les féminins


// OU


let male = 0; // initialisation des variables à 0!!
let female = 0;

for (i = 0; i < users.length; i++) {
    if (users[i].gender == "F") {
        female ++;
    }
    if (users[i].gender == "M") {
        male ++;
    }
}
console.log("Nombre de femme: " + female + " Nombre d'hommes: " + male); // Sortie navigateur


// Petit +
console.log(`${users[0].name}`); // Affiche le name de l'index O: Eileen
console.log(`${users[0].gender}`); // Affiche le genre de l'index 0: F


// OU, en TS:

// a = 0;
// let male = users.filter(a => a.gender == "M").length; 