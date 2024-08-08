function commanderTickets() {
  // Définition du prix unitaire des tickets
  let prixUnitaire = 20;
  // Demande du nom de l'acheteur et du nombre de tickets souhaités
  let nomAcheteur = prompt("Quel est votre nom ?");
  let nombreTickets = prompt("Combien de tickets souhaitez-vous commander ?");
  nombreTickets = parseInt(nombreTickets);

  // Vérification de la validité du nombre de tickets saisi
  if (isNaN(nombreTickets) || nombreTickets <= 0) {
      alert("Veuillez saisir un nombre de tickets valide.");
      return;
  }

  // Calcul du prix total de la commande
  let prixTotal = nombreTickets * prixUnitaire;

  // Affichage des détails de la commande dans la console et dans une alerte
  console.log("Commande de tickets pour le match de la NBA : " + nomAcheteur);
  console.log("Nombre de tickets : " + nombreTickets);
  console.log("Prix unitaire par ticket : $" + prixUnitaire);
  console.log("Prix total de la commande : $" + prixTotal);

  alert("Votre commande de tickets pour le match de la NBA a bien été enregistrée.\n" +
      "Détails de la commande :\n" +
      "- Nom de l'acheteur : " + nomAcheteur + "\n" +
      "- Nombre de tickets : " + nombreTickets + "\n" +
      "- Prix unitaire par ticket : $" + prixUnitaire + "\n" +
      "- Prix total de la commande : $" + prixTotal);
  
  // Confirmation de la commande et redirection vers la page de paiement
  if (confirm("Confirmez-vous votre commande de " + nombreTickets + " tickets pour le match de la NBA ?\nPrix total : $" + prixTotal)) {
      window.location.href = "Paiement.xhtml";
  }
}

window.onload = function() {
  // Sélection de tous les boutons de commande
  let boutons = document.querySelectorAll('.boutonCommande');
  // Ajout de l'événement de clic sur chaque bouton
  boutons.forEach(function(bouton) {
      bouton.onclick = function() {
          commanderTickets();
      };
  });
};
