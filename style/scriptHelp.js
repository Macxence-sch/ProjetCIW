// Script pour le contrôle de saisie et les interactions utilisateur

// Contrôle de saisie du formulaire simple
document.getElementById('appointment-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre
  const name = document.getElementById('name').value; // Récupère la valeur du champ nom
  const date = document.getElementById('date').value; // Récupère la valeur du champ date

  // Vérifie si les champs nom et date sont vides
  if (name === '' || date === '') {
      alert('Veuillez remplir tous les champs du formulaire.'); // Affiche un message d'alerte
  } else {
      alert(`Votre rendez-vous a été pris avec succès pour le ${date} `); // Affiche un message de succès avec la date du rendez-vous
  }
});

// Script pour le calendrier
document.addEventListener('DOMContentLoaded', function() {
  const today = new Date(); // Récupère la date actuelle
  const calendar = document.getElementById('datepicker'); // Récupère l'élément contenant le calendrier
  const options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
  };

  // Boucle pour créer les boutons de date pour les 7 prochains jours
  for (let i = 0; i < 7; i++) {
      const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000); // Calcule la date pour chaque jour
      const formattedDate = date.toLocaleDateString('fr-FR', options); // Formate la date en format court
      const button = document.createElement('button'); // Crée un bouton pour chaque date
      button.textContent = formattedDate; // Définit le texte du bouton comme la date formatée
      button.addEventListener('click', function() {
          document.getElementById('date').value = date.toISOString().split('T')[0]; // Met à jour la valeur du champ date avec la date sélectionnée
      });
      calendar.appendChild(button); // Ajoute le bouton au calendrier
  }
});

// Script pour la navigation entre les photos
const prevBtn = document.querySelector('.prev'); // Sélectionne le bouton précédent
const nextBtn = document.querySelector('.next'); // Sélectionne le bouton suivant
const photos = document.querySelector('.photos'); // Sélectionne le conteneur des photos

let currentIndex = 0; // Indice de la photo actuelle
const totalPhotos = document.querySelectorAll('.photos img').length; // Nombre total de photos
const photoWidth = document.querySelector('.photos img').clientWidth; // Largeur d'une photo

// Fonction pour naviguer entre les photos
function navigate(direction) {
  if (direction === 'next') {
      currentIndex++;
      if (currentIndex === totalPhotos) {
          currentIndex = 0;
      }
  } else {
      currentIndex--;
      if (currentIndex < 0) {
          currentIndex = totalPhotos - 1;
      }
  }
  photos.style.transform = `translateX(${-currentIndex * photoWidth}px)`; // Déplace les photos horizontalement
}

// Ajoute des écouteurs d'événements pour les boutons de navigation
prevBtn.addEventListener('click', () => navigate('prev')); // Bouton précédent
nextBtn.addEventListener('click', () => navigate('next')); // Bouton suivant
