// Fonction pour simuler le paiement
function simulerPaiement(informationsCarte) {
    console.log('Traitement du paiement pour', informationsCarte.nomDetenteur);
    // Création d'une promesse pour simuler le traitement du paiement
    return new Promise((resolve, reject) => {
        // Simulation d'un délai de traitement de 1 seconde
        setTimeout(() => {
            // Vérification si un numéro de carte est fourni
            if (informationsCarte.numeroCarte) {
                // Si oui, paiement réussi
                resolve('Paiement réussi');
            } else {
                // Sinon, paiement échoué avec une erreur de carte non valide
                reject('Paiement échoué: Carte non valide');
            }
        }, 1000);
    }).then(message => {
        // Affichage d'un message de paiement réussi avec confirmation
        if (confirm(message)) {
            // Redirection vers la page Basket.xhtml
            window.location.href = "Basket.xhtml";
        }
    }).catch(erreur => {
        // Gestion des erreurs de paiement avec une alerte
        alert(erreur);
    });
}

// Fonction pour mettre à jour le nom du détenteur de la carte
function majNomDetenteur(value) {
    // Sélection de l'élément HTML pour afficher le nom du détenteur et mise à jour avec la valeur en majuscules
    document.querySelector('.nom-detenteur').textContent = value.toUpperCase();
}

// Fonction pour mettre à jour le numéro de carte
function majNumeroCarte(value) {
    // Sélection de l'élément HTML pour afficher le numéro de carte et formatage du numéro
    const numeroCarte = document.querySelector('.numero-carte');
    const trimmedValue = value.replace(/\s/g, '').substring(0, 16); // Suppression des espaces et limitation à 16 caractères
    const formattedValue = trimmedValue.replace(/(.{4})/g, '$1 '); // Ajout d'un espace tous les 4 caractères
    numeroCarte.textContent = formattedValue;
}

// Fonction pour mettre à jour la date d'expiration
function majDateExpiration(value) {
    // Sélection de l'élément HTML pour afficher la date d'expiration et mise à jour avec la valeur formatée
    const dateExp = document.querySelector('.date-exp');
    dateExp.textContent = value.length >= 4 ? value.substring(0, 2) + '/' + value.substring(2) : 'MM/AA'; // Format MM/AA
}

// Fonction pour mettre à jour le code CVV
function majCVV(value) {
    // Sélection de l'élément HTML pour afficher le code CVV et mise à jour avec la valeur
    const cvv = document.querySelector('.cvv');
    cvv.textContent = value.length >= 3 ? value : 'CVV'; // Limiter à 3 caractères pour CVV
}

// Fonction pour acheter un billet NBA
function acheterBilletNBA() {
    // Récupération des informations de la carte de crédit depuis les champs du formulaire
    const informationsCarte = {
        nomDetenteur: document.getElementById('nomDetenteur').value,
        numeroCarte: document.getElementById('numeroCarte').value,
        dateExpiration: document.getElementById('dateExpiration').value,
        cvv: document.getElementById('cvv').value
    };
    
    // Appel de la fonction de simulation de paiement avec les informations de la carte
    simulerPaiement(informationsCarte)
        .then(message => alert(message)) // Affichage d'un message de paiement réussi avec une alerte
        .catch(erreur => alert(erreur)); // Gestion des erreurs de paiement avec une alerte
}