/*explication:: 
DOMContentLoaded est un événement JavaScript qui se déclenche lorsque le document HTML 
a été complètement chargé et analysé, sans attendre le chargement complet des ressources externes
 (images, feuilles de style, scripts externes, etc.). 
 Cela signifie que l'arbre DOM est construit et disponible pour être manipulé par JavaScript.
  l'utilisation de trim() dans ce contexte permet de s'assurer que l'utilisateur ne saisit pas2
   simplement des espaces blancs lorsqu'il est invité à entrer un commentaire,
    mais fournit effectivement un commentaire ou critique significatif.*/

    /* completer le code et suivez les commentaires*/

 // Attente que le DOM soit complètement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function() {
    var commCounter = 0; // Initialisation du compteur de commentaires à 0
    
    // Fonction pour ajouter un commentaire
    function ajouterCommentaire() {
      // Vérifie si le nombre de commentaires ou critiques est inférieur à 5
      if (???) {
        // Invite l'utilisateur à saisir un commentaire/critique dans une boîte de dialogue
        ??????? ??????("Entrez votre commentaire :");
        
        // Vérifie si le commentaire/critique n'est pas vide et n'est pas nul
        if (???? ??????? && commentaire.trim() !== "") { 

          // Crée un nouvel élément div pour contenir le commentaire/critique en utilisant document.createElement
          var nouveauCommentaire = ??????? ;

          // Définit le contenu texte de l'élément div avec le commentaire/critique saisi
          nouveauCommentaire.textContent = commentaire;
          // Ajoute le nouvel élément div à la zone de commentaires dans le DOM ( en utilisant getElementByID et appendChild)
          document.????("???").???(????);
          // Incrémente le compteur de commentaires/critiques
          commCounter ??; /* renommer votre variable comme vous voulez*/
        } 
        
        else {
          // Alerte l'utilisateur si le commentaire est vide
          ???("Veuillez saisir un commentaire valide.");
        }
      } else {
        // Alerte l'utilisateur si le nombre maximum de commentaires est atteint
        ???("....");
      }
    }
  
    // completer la fonction pour supprimer un commentaire

    function supprimerCommentaire() {
      // Récupère la zone de commentaires dans le DOM
     ???  ???? ;
      
      // Vérifie s'il y a des commentaires (ou crituque) à supprimer
      if (commentaires.childElementCount > 0) {
        // Supprime le dernier commentaire ajouté de la zone de commentaires ( en utilisant removeChild(), lastChild )
        ??.??(???.???);

        // Décrémente le compteur de commentaires ou critiques 
        commCounter--;
      }
    }
  
    // Écouteurs d'événements pour les boutons "Ajouter critique" et "Supprimer commentaire" en utilisant getElementById, addEventListener()
    document.????....;
    document.???....;
  });

  /* commentaire = crituque pour notre exemple */
  
  