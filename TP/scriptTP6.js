// Le Scenario:

// Créer un tableau initial avec 2 véhicules 
// Afficher le tableau 
// Ajouter 2 nouveaux véhicules 
// Afficher le tableau 
// Supprimer le véhicule a l’index 1
// Afficher le tableau 
// Trier le tableau par marques
// Supprimer le dernier véhicule 
// Afficher le tableau 

// Les données:
// Tesla: Model y
// Renault: zoe
// Mustang: mach-e
// Polestar: Polestar 2

// Créer un tableau initial avec 2 véhicules 
let cars = [
    {
        brand: "Tesla",
        model: "Model Y",
    },
    {
        brand: "Renault",
        model: "Zoe",
    }
];

// Demande d'afficher le tableau plusieurs fois donc création d'une fonction
function showCars(cars) {
    for (const car of cars) {
        console.log(`${car.brand}: ${car.model}`);
    }
    console.log("-------------");
}

// Afficher le tableau 
showCars(cars);

// Ajouter 2 nouveaux véhicules de manière dynamique
cars.push( { // Je prend un ojet et je "push"/"pousse" une nouvelle entrée à la fin du tableau
    brand: "Mustang",
    model: "Mach-e",
});
cars.push( {
    brand: "Polestar",
    model: "Polestar 2",
});

// Afficher le tableau 
showCars(cars);

// Supprimer le véhicule a l’index 1
cars.splice(1,1); 
// splice (1) -> tu supprimes les entrées de mon tableau à partir de l'index 1
// splice (1, 2) -> tu supprimes deux entrées du tableau à partir de l'index 1
// splice (1, 1) -> tu supprimes une seule entrée du tableau à partir de l'index 1
// splice () -> 

// Trier le tableau par marques
cars.sort((a, b) => { // sort boucle tout seul sur le tableau
    let fa = a.brand.toLowerCase(); // on met en minuscule la valeur de brand pour améliorer le tri
    let fb = b.brand.toLowerCase();

    if (fa < fb) { 
        return -1; // retrie en fonction de la positidon dans l'index
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});

// Afficher le tableau 
showCars(cars);

// Supprimer le dernier véhicule 
cars.pop(); // supprime la toute dernière ligne du tableau

// Afficher le tableau 
showCars(cars);


// OU


// Créer un tableau initial avec 2 véhicules 
let carsT = [
    {name: "Tesla", model: "y"},
    {
        name: "Mustang", model: "mach-e"
    },
    {name: "Renault", model: "zoe"},
    {
        name: "Mustang", model: "mach-e"
    }
];

// Afficher le tableau 
console.log(carsT);

// Ajouter 2 nouveaux véhicules 
let car1 = {
    name: "Mustang", model: "mach-e"
}
let car2 = {
    name: "Polestar", model: "Polestar 2"
}

carsT.push(car1);
carsT.push(car2);

// Afficher le tableau 
console.log(carsT);


// Supprimer le véhicule a l’index 1
console.log(carsT[1]); // Affiche véhicule à l'index 1
delete carsT[1]; // supprime la valeur à l'index donnée mais conserve l'index -> donne une ligne vide

// Afficher le tableau 
console.log(carsT);

// Trouve la voiture Mustang mach-e
let car = carsT.find(car => carsT.name === "Mustang" && carsT.model === "mach-e");

// Trier le tableau par marques (pas par ordre alphabétique mais REGROUPE les objets par marque)
let sizes = carsT.map(car => {
    if (car.name == "Mustang"){
      return "Mustang";
    }
    if (car.name == "Polestar"){
      return "Polestar";
    }
    if (car.name == "Renault"){
        return "Renault";
    }
    return "Tesla";
});
console.log(sizes + "TRI");

carsT.pop();
// Supprimer le dernier véhicule 

console.log(carsT);
// Afficher le tableau 
