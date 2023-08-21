"use strict";

/**
 * /!\ 2 errors
 */
const url = "http://127.0.0.1:5500/TP-Cart/data.json";
const catalogNode = document.querySelector("#catalog"); // Erreur 1 catalog // Sélectionne l'élément HTML avec l'id catalog et le stock dans la variable catalogNode
const cartProductsNode = document.querySelector("#products"); // Ereeur 2 products
const cartAmountNode = document.querySelector("#amount");
let cart = [];

// Modèle de ce que l'on doit récuperer du tableau cart
// let cart = [
//   {
//     id: 2,
//     price: 0,77,
//     quantity: 2
//   }
// ]

/**
 * Start the app
 * -> Get all products
 * -> Create the HTML product view
 * 
 * /!\ 1 error
 */
(async function() { // Parcourt chaque produit retourné et appelle une fonction createProductView() pour créer une vue de chaque produit.
  let products = await getData(url); // Erreur: on veut récupérer les données à partir d'une url fournie

  for (const product of products) {
    createProductView(product);
  }
})(); 

/**
 * Get and return some data
 * 
 * @param {string} url 
 * @returns 
 * 
 * /!\ 0 error
 */
async function getData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();

    return data;
  } catch (e) {
    return [];
  }
}

/**
 * Create the HTML DOM of product
 * 
 * @param {Object} product 
 * 
 * /!\ 6 errors
 * /!\ 3 tasks
 */
function createProductView(product) {
  // Colonne de gauche: image
  let imageNode = document.createElement('img'); // Création du noeud HTML de l'image
      imageNode.alt = product.title; // Permet d'afficher le titre de l'image
      imageNode.src = product.illustration; // Tâche 1: .src permet d'afficher l'image du produit dans la page web
      // on assigne la valeur de la propriété illustration de l'objet product à l'attribut src de l'élément HTML <img> représenté par la variable imageNode.

  let divLeftNode = document.createElement('div'); // Création du noeud HTML contenant l'image
      divLeftNode.classList.add('flex-shrink-0'); // Ajoute la classe CSS "flex-shrink-0" à l'élément divLeftNode.
      divLeftNode.append(imageNode); // Erreur 1: appelé comme chaîne de caractère alors que ça doit être appelé comme variable
                                    // l'image sera incluse dans le contenu HTML de divLeftNode


  // Colonne de droite
  // -> Titre du produit
  // -> Description du produit
  // -> Prix du produit
  // -> Bouton Ajouter au panier

  let productTitleNode = document.createElement('h5'); // Création du noeud HTML <h5>
      productTitleNode.innerText = product.title; // Erreur 2: affiche le titre du produit dans le noeud crée au dessus

  let productDescriptionNode = document.createElement('p'); // Création du noeud HTML <p>
      productDescriptionNode.innerText = product.description; // Tâche 2 : afficher la description du produit dans le noeud crée au dessus

  let priceNode = document.createElement('div');
      priceNode.classList.add('price'); // Erreur 3: classList // ajoute la classe CSS 'price' à l'élément HTML crée au dessus
      priceNode.classList.add('me-auto'); // Erreur 4: classList
      priceNode.innerHTML = `${product.price} &euro;`; // Erreur 5: innerHTML pour inclure du code HTML à l'intérieur de la balise (ici &euro)
                                                      // ajoute le prix du produit en € à l'intérieur de l'élément HTML crée au dessus

  let addCartBtnNode = document.createElement('button');
      addCartBtnNode.classList.add('btn-sm'); // classe pour avoir un bouton plus petit
      addCartBtnNode.classList.add('btn');
      addCartBtnNode.classList.add('btn-primary'); // classe pour avoir un bouton bleu
      addCartBtnNode.innerText = "Ajouter au panier";
      addCartBtnNode.dataset.id = product.id; // dataset est utilisée pour accéder aux attributs data-* des éléments HTML 
                                              // définit un attribut data-id et lui donner comme valeur l'ID du produit product.id
                                              // check "data-id" dans l'exemple HTML
      addCartBtnNode.dataset.price = product.price; // product = itération du produit en cours .price = son prix
      addCartBtnNode.addEventListener('click', addToCart); // ajoute un écouteur d'événements (click) sur le bouton "addCartBtnNode" qui va déclencher addToCart

  let priceLineNode = document.createElement('div');
      priceLineNode.classList.add('d-flex');
      priceLineNode.append(priceNode); // Erreur 6: priceNode // Ajout de l'élément priceNode à priceLineNode
      priceLineNode.append(addCartBtnNode);

  let divRightNode = document.createElement('div');
      divRightNode.classList.add('flex-grow-1');
      divRightNode.classList.add('ms-3');
      divRightNode.append(productTitleNode);
      divRightNode.append(productDescriptionNode);
      divRightNode.append(priceLineNode);

  // Conteneur produit
  let productNode = document.createElement('div');
      productNode.classList.add('product');
      productNode.append(divLeftNode);
      productNode.append(divRightNode); // Tâche 3: affiche la div droite en l'injectant dans son parent
                                        // place divRightNode à la fin de productNode (car divRightNode enfant de productNode)

  catalogNode.append(productNode); // affiche le produit dans le catalogue en l'ajoutant à la fin de la liste existante 
                                  // jusqu'à ce que tout les éléments du fichier json soit afficher
}

/**
 * Add or Update product to/in cart
 * 
 * @param {Event} event 
 * 
 * /!\ 0 error
 * /!\ 2 tasks
 */
function addToCart(event) {
  // Récupération des données du produits (id et price) à partir de l'event click
  const btn = event.target; // récupère le noeud HTML qui déclenche l'évènement (le "Ajouter au panier")
  const productId = parseInt(btn.dataset.id); // récupère le data-id (grâce à dataset) + parseInt pour convertir en number ENTIER (au lieu de string)
  const productPrice = parseFloat(btn.dataset.price); // récupère le prix du produit associé au bouton + parseFloat pour convertir en number DECIMAL (au lieu de string)

  const productIndex = cart.findIndex(({ id }) => id === productId); // cherche l'index du produit qui a un id égal à l'index d'un produit présent dans le panier
                                                                    // si id trouvé dans le panier: productIndex prend l'index de ce produit dans le tableau panier
                                                                    // sinon productIndex retourne -1
  
  // Petit +:
  // const fruits = ["Pommes", "Poires", "Banane", "Fraise"]
  // const index = fruits.findIndex(fruits => fruit === "Fraise");
  // console.log(index); -> 3
  // console.log(fruits[index]); -> Fraise


  // Ajouter un produit au panier ou mettre à jour le produit dans le panier
  if (productIndex === -1) { // si produit n'existe pas (index negatif)...
    cart.push({ // alors ajout quantité 1, son prix et son id
      id: productId, 
      price: productPrice, 
      quantity: 1 
    });
  } else { // sinon mise à jour de la quantité produit (on incrément 1)
    cart[productIndex].quantity ++; // OU cart[productIndex].quantity += 1;
  }

  // Il faut enregistrer la variable cart (le contenu du panier) dans le (local storage du) navigateur
  localStorage.setItem("cart", JSON.stringify(cart));
  // setItem: méthode de cet objet qui permet de stocker une valeur en associant une clé à cette valeur.
  // JSON.stringify(cart): converti en une chaîne JSON 

  // Update cart view
  refreshCartView();
  displayCart();
}

/**
 * Refresh view cart
 * 
 * /!\ 2 errors
 * /!\ 2 tasks
 */
function refreshCartView() { // met à jour le neoud HTML du panier en calculant le nombre total de produits dans le panier et le montant total
  let cartProducts = 0;
  let cartAmount = 0;

  // Calcule les données dans le panier
  for (const product of cart) { // je boucle sur le tableau cart et je parcours chaque produit/product dans le panier/cart
    cartProducts += product.quantity; // ajoute sa quantité/quantity à la variable cartProducts
    cartAmount += product.quantity * product.price; // et son prix multiplié par sa quantité à la variable 
  }

  // mise à jour de la vue du panier
  cartProductsNode.innerText = cartProducts; // Mise à jour des noeuds HTML en affichant le nombre total de produits dans le panier qui est dans l'élément HTML cartProductsNode
  cartAmountNode.innerText = `${cartAmount.toFixed(2)}`; // Mise à jour des noeuds HTML en affichant le montant total des produits dans le panier qui est dans l'élément HTML cartAmountNode
                                          // arrondit le montant total à deux décimales.
}





function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []; // récupére le panier enregistré dans le "localStorage"
  const cartContainerNode = document.querySelector("#cart-container");

// Affiche le contenu du panier
if (cart.length === 0) { // teste si le panier est vide, si oui...
  cartContainerNode.innerHTML = document.createElement('p');
  cartContainerNode.innerText = "Votre panier est vide";
} else { // ... sinon
  let cartContent = "<ul>"; // assigne une chaîne de caractères contenant une liste HTML.
  let cartTotal = 0;
  for (const product of cart) {
    cartContent += `<li>${product.title} (${product.quantity}) - ${product.price.toFixed(2)} &euro;</li>`; // itère sur chaque objet "product" dans le tableau "cart" et pour chaque produit, une ligne de la liste est ajoutée à "cartContent" avec les informations du produit.
    cartTotal += product.quantity * product.price; // calcule le total du panier en multipliant la quantité de chaque produit par son prix et en ajoutant le résultat à la variable "cartTotal".
  }
  cartContent += "</ul>"; // ajoute la balise de fin de liste à "cartContent".
  cartContent += `<p>Total : ${cartTotal.toFixed(2)} &euro;</p>`; // ajoute une balise "p" avec le total du panier à "cartContent".
  cartContainerNode.innerHTML = cartContent; // affiche le contenu du panier dans le noeud HTML de la page web.
}
}