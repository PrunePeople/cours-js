"use strict"

// Cibler tous les éléments qui possède l'attribut "required"
// Remonter sur son élément parent
// Cibler l'élément frère "label" de l'élément qui possède l'attribut "required"
// Injecter la class "required" sur l'élément "label"


// Cibler tous les éléments qui possède l'attribut "required"
const arr_required = document.querySelectorAll('[required]');
// On veut une liste d'élément donc All

for (const item of arr_required) {
    console.log(item.parentNode); // div.form-group OU <div class="form-group">...</div>
    let parent;
    let label;

    // Recherche du parent
    if (item.nodeName === 'INPUT') { // on recherche les parents des éléments input
        parent = item.parentNode;
    }
    else if (item.nodeName === 'SELECT') {
        parent = item.parentNode.parentNode.parentNode; // on recherche les grands-parent des éléments input
    }

    // Recherche de l'enfant
    if (parent.nodeName === 'DIV') {
        label = parent.querySelector('label');
    }
    else {
        label = parent;
    }

    label.classList.add('required');

    console.log(item.nodeName); // INPUT
    console.log(item.parentNode); // div.form-group
    console.log(parent); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    console.log(parent.parentNode); // <form method="get" novalidate="">...</form>*
    console.log(label); // label
}



// Générer les listes de sé:ections du champ "Birthday"

// Liste des jours
const select_day = document.querySelector('[name="birthday[day]"]'); // OU "[name='birthday[day]']"
console.log(select_day);

for (let i = 1; i <= 31; i++) { // Création de 31 balises <option>
    let el_option = document.createElement('option');
        el_option.value = i;
        el_option.innerText = i<=9 ? `0${i}` : i ;

    select_day.append(el_option); // injecte la balise option dans salect_day
    // console.log(i);
}

// Liste des mois
const months = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const select_month =  document.querySelector('[name="birthday[month]"]');
const monthLenght = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // nombre de jour par chaque mois

for (let i = 0; i < months.length; i++) {
    let el_option = document.createElement('option');
        el_option.value = [i + 1];
        el_option.innerText = months[i];

    select_month.append(el_option);
}

// Lise des années
const select_year =  document.querySelector('[name="birthday[year]"]');
const date = new Date(); // Liste d'objets
const year = date.getFullYear(); // 2023 - Prend la date de l'horloge interne de la machine qui exécute le code
console.log(date); // Tue Mar 21 2023 15:56:07 GMT+0100 (heure normale d’Europe centrale)
const minYear = year-100;

for (let i = 2023; i >= minYear; i--) { // OU (let i = 2023; i > 1923; i--)
    let el_option = document.createElement('option');
        el_option.value = i;
        el_option.innerText = i;

    select_year.append(el_option);
}



// Contrôle du formulaire
const form = document.querySelector('form'); // je capte le formulaire
const el_firstname = document.querySelector('input[name=firstname]'); // el pour élément car on veut stocker un élément HTML
const el_lastname = document.querySelector('input[name=lastname]');
const el_email = document.querySelector('input[name=email]');
const el_password = document.querySelector('input[name=password]');
const el_confirm_password = document.querySelector('input[name=confirmpwd]');
const el_agreeTerms = document.querySelector('input[name=agreeTerms]');
const el_birthday_day = document.querySelector('select[name="birthday[day]"]');
const el_birthday_month = document.querySelector('select[name="birthday[month]"]');
const el_birthday_year = document.querySelector('select[name="birthday[year]"]');

form.addEventListener('submit', event => { // je capte la soumssion du formulaire
    let error = false; // On considère qu'il n'y a pas d'erreur...
    // console.log("Check Form");

    let firstname = el_firstname.value; // check firstname
    // console.log(firstname);
    // console.log(el_firstname);

    if (!firstname.length) { // on est en erreur si le champ n'est pas rempli donc on veut l'inverse
        // console.log("Le champ firstname est obligatoire");

        let el_error = document.createElement('div');
            el_error.classList.add('error');
            el_error.innerText = "Le champ firstname est obligatoire";
        
        el_firstname.classList.add('is-invalid');
        el_firstname.parentNode.append(el_error);

        error = true;
    }
    else if (!/^[a-zéàùèç][a-z- éàùèç]*[a-zéàùèç]?$/i.test(firstname)) { // si firstname ne correspond pas à la RegEx
        // console.log("Le prénom doit contenir uniquement des caractères alphabétiques.");
        let el_error = document.createElement('div');
        el_error.classList.add('error');
        el_error.innerText = "Le prénom doit contenir uniquement des caractères alphabétiques.";

        el_firstname.classList.add('is-invalid');
        el_firstname.parentNode.append(el_error);

        error = true;
    }

    if (error){ // ...donc pas de raison de bloquer le formulaire
        event.preventDefault(); // permet d'annuler/bloquer un comportement par défaut, ici du formulaire
                                // iic, va stopper la soumission du formulaire dans le cas où le formulaire à des défauts
    }
});


// OU

/**
 * Show an error message
 * @param {ElementNode} target 
 * @param {string} message
 * @retrun void // ne retourne rien
 */
function showError (target, message) {  // Pour afficher un message d'erreur
    let el_error = document.createElement('div');
        el_error.classList.add('error');
        el_error.innerText = message;

    target.classList.add('is-invalid'); // is-invalid: classe Bootstrap
    target.parentNode.append(el_error);
}

form.addEventListener('submit', event => {
    
    let error = false; // initialisé à false UNE SEULE FOIS

    // Check firstname
    let firstname = el_firstname.value;

    // firstname is required
    if (!firstname.length) // on teste si il y a une longueur (si le champ est vide)
    {
        showError(el_firstname, "Le champ firstname est obligatoire !!");
        error = true; // on change le statut de error "oui, il y a une erreur"
    }
    else if (!/^[a-zéàùèç][a-z- éàùèç]*[a-zéàùèç]?$/i.test(firstname)) // si champ non vide, on teste si la chaîne de caractère correspond au motif de la RegEx
    {
        showError(el_firstname, "Le prénom doit contenir uniquement des caractères alphabétique.");
        error = true;
    }

    // Check lastname
    let lastname = ellasttname.value;

    // firstname is required
    if (!lastname.length) // on teste si il y a une longueur (si le champ est vide)
    {
        showError(el_lastname, "Le champ lastname est obligatoire !!");
        error = true; // on change le statut de error "oui, il y a une erreur"
    }
    else if (!/^[a-zéàùèç][a-z- éàùèç]*[a-zéàùèç]?$/i.test(lastname)) // si champ non vide, on teste si la chaîne de caractère correspond au motif de la RegEx
    {
        showError(el_lastname, "Le nom doit contenir uniquement des caractères alphabétique.");
        error = true;
    }

    if (error){
        // preventDefault arrete le comportement par défaut d'un evenement
        event.preventDefault();
    }
});


// OU

/**
 * Remove all error message
 * @return void
 */
function removeError() { // changement des messages d'erreur
    const isInvalid = document.querySelectorAll('.is-invalid'); // sélecteur de classe donc "."
    // console.log(isInvalid);
    for (const item of isInvalid) {
        item.classList.remove('is-invalid');
    }

    const errors = document.querySelectorAll('.error'); // sélecteur de classe donc "."
    // console.log(errors);
    for (const item of errors) {
        item.remove();
    }
}

/**
 * Check the firstname constraints
 * @returns {bool} true if firstname is valid
 */
function checkFirstname() { 
    // Check firstname
    let firstname = el_firstname.value;
    let error = false;
 
    // firstname is required
    if (!firstname.length) {
        showError(el_firstname, "Le champ firstname est obligatoire !!");
        error = true;
    }
    else if (!/^[a-zéàùèç][a-z- éàùèç]*[a-zéàùèç]?$/i.test(firstname)) { // Method 1 regEx
        showError(el_firstname, "Le prenom doit contenir uniquement des caractères alphabétique.");
        error = true;
    }
    return error;
}

/**
 * Check the lastname constraints
 * @returns {bool} true if lastname is valid
 */
function checkLastname() { 
    // Check lastname
    let lastname = el_lastname.value;
    let error = false;
    let regEx = new RegExp(/^[a-zéàùèç][a-z- éàùèç]*[a-zéàùèç]?$/, "i"); 
 
    // lastname is required
    if (!lastname.length) {
        showError(el_lastname, "Le champ lastname est obligatoire !!");
        error = true;
    }
    else if (!regEx.test(lastname)) { // Method 2 regEx
        showError(el_lastname, "Le nom doit contenir uniquement des caractères alphabétique.");
        error = true;
    }
    return error;
}

/**
 * Check the password constraints
 * @returns {bool} true if password is valid
 */
function checkEmail() { 
    // Check email
    let email = el_email.value;
    let error = false;
    let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
 
    // email is required
    if (!email.length) {
        showError(el_email, "Le champ email est obligatoire !!");
        error = true;
    }
    else if (!regEx.test(email)) { // Method 3 regEx
        showError(el_email, "L'email doit être au format user@server.com");
        error = true;
    }
    return error;
}

/**
 * Check the password constraints
 * @returns {bool} true if password is valid
 */
function checkPassword() { // travaille à deux endroits différents de deux façons différentes
    // Check password
    let password = el_password.value;
    let error = false;
 
    // Password is required
    if (!password.length) {
        showError(el_password, "Le champ password est obligatoire !!");
        error = true;
    }
    else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/i.test(password)) {
        showError(el_password, "Le mot de passe doit contenir entre 8 et 16 caractères et au moins un caractère alphébétique, numérique, spécial et au moins une majuscule.");
        error = true;
    }
    return error;
}
// OU
/**
 * Check the password constraints one by one
 * @returns {bool} true if password is valid
 */
function checkPassword() { // travaille à deux endroits différents de deux façons différentes
    // Check password
    let password = el_password.value;
    let error = false;
    let minChar = 8;
    let maxChar = 16;
 
    // Password is required
    if (!password.length) {
        showError(el_password, "Le champ password est obligatoire !!");
        error = true;
    }
    else if (password.length < minChar) { // Check minimum 8 caractères
        showError(el_password, `Le mot de passe doit contenir au moins ${minChar} caractères.`);
        error = true;
    }
    else if (password.length > maxChar) { // Check maximum 16 caractères
        showError(el_password, `Le mot de passe doit contenir au moins ${maxChar} caractères.`);
        error = true;
    }
    else if (!/[a-z]/.test(password)) { // Check minimum 1 caractère alphébétique minuscule
        showError(el_password, "Le mot de passe doit contenir au moins un caractère minuscule.");
        error = true;
    }
    else if (!/[A-Z]/.test(password)) { // Check minimum 1 caractère alphébétique majuscule
        showError(el_password, "Le mot de passe doit contenir au moins un caractère majuscule.");
        error = true;
    }
    else if (!/[0-9]/.test(password)) { // Check minimum 1 caractère numérique
        showError(el_password, "Le mot de passe doit contenir au moins un caractère numérique.");
        error = true;
    }
    else if (!/[+=\.?!-_§&@#]/.test(password)) { // Check minimum 1 caractère spécial
        showError(el_password, "Le mot de passe doit contenir au moins un caractère numérique.");
        error = true;
    }
    return error;
}

/**
 * Check the password constraints
 * @returns {bool} true if password is valid
 */
function confirmPassword() { 
    // Check password
    let password = el_confirm_password.value;
    let confirmation = el_confirm_password.value;
    let error = false;
 
    // email is required
    if (confirmation !== password) {
        showError(el_confirm_password, "Les mots de passe doivent être identiques");
        error = true;
    }
    return error;
}

/**
 * Check the password constraints
 * @returns {bool} true if password is valid
 */
function checkBirthday() { 
    // Check birthday
    let day = el_birthday_day.value;
    let month = el_birthday_month.value;
    let year = el_birthday_year.value;
    let error = false;

    // console.log(+day, typeof +day); // avoir une valeur en nombre
    // console.log(parseInt(day), typeof parseInt(day)); // parseInt: conversion des valeurs en nombre

    // Conversion des valeurs string en number
    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    let date_str = month <= 9 ? `0${month}` : month;
        date_str += "/"
        date_str += day <= 9 ? `0${day}` : day;
        date_str += "/"
        date_str += year

    if (!isValidDate(day, month, year)) { // Validité de la date
        showError(el_birthday_day.parentNode.parentNode, `Sélectionnez une date valide`);
        error = true;
    }
    else if (getAge(date_str) < 13) { // Age minimum 13 ans
        showError(el_birthday_day.parentNode.parentNode, `Les mineurs de moins de 13 ne sont pas autorisés`);
        error = true;
    }
    return error;
}

function isValidDate(day, month, year) {
    // birthday is required
    if (year < 1000 || year > 3000 || month == 0 || month > 12) {
        return false;
    }
    // Check année bisextile
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) { // si tu divises l'année par 400, est-ce que le reste entier est égal à 0?
        monthLenght[1] = 29; // le mois à l'index 1, février -> 29 jours
    }
    // console.log(month);
    return day > 0 && day <= monthLenght[month - 1];
}

function getAge(birthday_str) {
    let today = new Date();
    console.log(today); // Wed Mar 22 2023
    let birth_date = new Date(birthday_str); 
    console.log(birth_date); // Sun Jan 01 2023
    let age =  today.getFullYear() - birth_date.getFullYear(); // getFullYear: permet de récupérer l'année sur 4 caractères
    let m = today.getMonth() - birth_date.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth_date.getDate())) { // Si on tombe sur 13 ans pile - la date actuelle alors...
        age --;
    }
    return age;

}

// Petit +:
// let date_str = `${day}/${monther}/${year}`;
// let date = new Date; 
// console.log(date_str); // 05/12/2022
// console.log(date); // Wed Mar 22 2023 14:32:20 GMT+0100

function checkTerms() {
    let agreeTerms = el_agreeTerms.checked; // par défaut une case à cocher retourne toujours on, donc on cherche à savoir si la cache est coché
    let error = false;

    if (!agreeTerms) {
        showError(el_agreeTerms, "Vous devez accepter les CGU");
    }
    return error;
}

form.addEventListener('submit', event => {

    let error = false; // si on le met à la fin: "meme si tu as controlé des erreurs, moi je te dis qu'il n'y en a pas finalement à la fin"

    removeError();
    
    // Check firstname
    if (checkFirstname()) {
        error = true;
    }

    // Check lastname
    if (checkLastname()) {
        error = true;
    }

    // Check email
    if (checkEmail()) {
        error = true;
    }

    // Check password
    if (checkPassword()) {
        error =true;
    }

    // Confirm password
    if (confirmPassword()) {
        error =true;
    }

    // Check birthday
    if (checkBirthday()) {
        error =true;
    }

    // Check CGU
    if (checkTerms()) {
        error =true;
    }

    if (error) {
        event.preventDefault();
    }
});

el_firstname.addEventListener('blur', checkFirstname); // 'blur' quand on quitte le champ ≠ 'focus'
el_lastname.addEventListener('blur', checkLastname); 
el_email.addEventListener('blur', checkEmail); 
el_password.addEventListener('blur', checkPassword); 
el_confirm_password.addEventListener('blur', confirmPassword); 
el_birthday_day.addEventListener('change', checkBirthday); 
el_birthday_month.addEventListener('change', checkBirthday); 
el_birthday_year.addEventListener('change', checkBirthday); 