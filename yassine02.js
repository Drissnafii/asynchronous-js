/*
Programme démarréProgramme démarré
Début de la récupération des données...Début de la récupération des données...
Requête lancée, en attente des données...Requête lancée, en attente des données...
Données récupérées avec succès (après 2 secondes)Données récupérées avec succès (après 2 secondes)
=== Informations utilisateur ====== Informations utilisateur ===
Nom : Jean DupontNom : Jean Dupont
Email : jean.dupont@email.comEmail : jean.dupont@email.co */

let data = (A, callback) => {
    console.log("commencer la recuperation des donnees...");

    let user = {
        numberOf: A,
        name: "Driss",
        age: 20,
        city: "sale",
        hobies: ['foot', 'loop', 'coding']
    }

    console.log('Données récupérées avec succès (après 2 secondes');

    setTimeout(() => {
        callback(user);
    }, 3000);
    console.log('installing l3alawi app....');
}

function recuperrerDonnees(obj) {
    console.log('User info: ');
    console.log(obj.age);
    console.log(obj.city);
    console.log(obj.hobies);
    console.log(obj.numberOf);
}

function ageAndNumber(objj) {
    let total = objj.age + objj.numberOf;
    console.log(total);
}

// data(123, recuperrerDonnees);
data(354, ageAndNumber)