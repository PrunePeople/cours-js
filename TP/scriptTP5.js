// Ecrire une fonction permettant de générer un mot de passe
// inspiré de : https://stackoverflow.com/questions/1497481/javascript-password-generator

// Les paramètres à prendre en entrée sont:
// - Longueur du mot de passe finale (number)
// - Integration des majuscules (bool)
// - Integration des nombre de 0 à 9 (bool)
// - Integration des caractères spéciaux ($=+;.!-_§|) (bool)



// let password = generatePassword();
// console.log(password);


// Générer le mdp dans un input avec DOM - Exemple 1
function generatePassword(lenght=10, uppercase=false, number=false, special=false) { // Penser à déclarer des arguments par défaut 
                                                                                    // (qui seront "écrasés" par les paramètres entrés lors de l'appel de la fonction!)
    let output = "" ; // variable de sortie - cette chaîne que l'on va remplir
    let charset = "azertyuiopqsdfghjklmwxcvbn"; // variable par défaut
    if (uppercase) {
        charset += charset.toUpperCase(); // j'affecte nouvelle valeur à la variable existante
                                        // je convertis la chaîne charset en maj que j'ajoute à charset de base
    }
// On veut cumuler donc pas de else ni else if!
    if (number) {
        charset += "1234567890"; // Idem avec les nombres
    }

    if (special) {
        charset += "($=+;.!-_§|) "; // Idem avec caractères spéciaux
    }

    let charsetLen = charset.length; // Compte le nombre de lettres de la chaîne modifiée

    for (let i = 0; i < lenght ; i ++) { // lenght : paramètre de la fonction

        // output += "x"; 
        // console.log(outupt); // Renvoie par exemple "xxxxx" si paramètre lenght = 5

        // Création d'un nombre aléatoire entre 0 et le nombre ttal de caractères de la chaîne modifiée
        let rand = Math.floor (Math.random() * charsetLen); // x nombre complètement aléatoire compris dans ma variable charset
        // Le code exécute toujours ce qu'il y a dans les parenthèses en premier:
        // Math.random() renvoie un nombre aléatoire entre O et 1
        // Math.floor retourne un entier, ici de (Math.random() * charsetLen)

        // Choix d'un caractère dans la chaîne modifiée et concaténation dans la variable de sortie
        output += charset.charAt(rand); // Pioche chaque caractère de la chaîne modifiée
    }
    return output; // Sortie du mot de passe
}

const btn = document.querySelector('#genPass'); // Sélection du noeud HTML qui corrrespond au bouton
const divPass = document.querySelector('#newPassDiv');
const inputPass = document.querySelector('[name=newPassInput');

btn.addEventListener('click', () => {
    const newPwd = generatePassword(16, true, true, true); // Génération du mdp
    console.log(newPwd);

    divPass.innerText = newPwd; // Injection du mdp dans la div
    console.log(newPwd);

    inputPass.value = newPwd;
    console.log(newPwd); // Injection du mdp dans le input
})


// OU


function generatePassword2(lengthPassword, uppercase, number, caracSpe) {

    var length = lengthPassword;
// longueur du mot de passe
    var charset = "azertyuiopqsdfghjklmwxcvbn";
// charset de base
    var retVal = "";
// variable vide au départ

    if (uppercase) {
        charset = charset + "AZERTYUIOPQSDFGHJKLMWXCVBN"
    };
// si uppercase = TRUE alors le charset = "azertyuiopqsdfghjklmwxcvbn" + "AZERTYUIOPQSDFGHJKLMWXCVBN"
    
    if (number) {
        charset = charset + "1234567890"
    };
// si number = TRUE alors le charset = "azertyuiopqsdfghjklmwxcvbn" + "1234567890"

    if (caracSpe) {
        charset = charset + "($=+;.!-_§|)"
    };
// si caracSpe = TRUE alors le charset = "azertyuiopqsdfghjklmwxcvbn" + "($=+;.!-_§|)"

    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

console.log(generatePassword2(16, false, true, true));



// Petit +: Générer password UNE ENTREE

function generatePassword3(champ_cible) {
    var charset = 'azertyupqsdfghjkmwxcvbn23456789AZERTYUPQSDFGHJKMWXCVBN';
    var retVal = '';
    lengthPassword = 16;

    for (i = 0; i < lengthPassword; i++) {
        var wpos = Math.round (Math.random () * charset.length);
        retVal += charset.substring(wpos,wpos+1);
    }
    document.getElementById(champ_cible).value = retVal;
}