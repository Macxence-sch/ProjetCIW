document.addEventListener("DOMContentLoaded", function() {
    var commCounter = 0;            // Initialisation du compteur de commentaires à 0

    
    function ajouterCommentaire() {               // création de la fonction pour ajouter un commentaire
       
        if (commCounter < 5) {               // Vérifie si le nombre de critiques est inférieur à 5
           
            var commentaire = prompt("Entrez votre commentaire :");          // Invite l'utilisateur à saisir une critique dans une boîte de dialogue

            
            if (commentaire && commentaire.trim() !== "") {         // Vérifie si la critique n'est pas vide et n'est pas nul

                
                var nouveauCommentaire = document.createElement("div");  // Crée un nouvel élément div pour contenir le commentaire/critique en utilisant document.createElement
                
                nouveauCommentaire.textContent = "CRITIQUE n° " + (1 + commCounter) + " : ' " + commentaire + " '";  // Définit le contenu texte de l'élément div avec la critique saisi
                
                document.getElementById("critiques-container").appendChild(nouveauCommentaire);  // Ajoute le nouvel élément div à la zone de commentaires( en utilisant getElementByID et appendChild)
                
                commCounter++; // Incrémente le compteur de critiques
            } 
            
            else {
                
                alert("Veuillez saisir un commentaire valide.");  // Alerte l'utilisateur si le commentaire est vide
            }
        } else {
            
            alert("Vous ne pouvez pas ajouter plus de 5 commentaires.");  // Alerte l'utilisateur si le nombre maximum de commentaires est atteint
        }
    }

    
    function supprimerCommentaire() {  // Création de la fonction pour supprimer un commentaire
        
        var commentaires = document.getElementById("critiques-container");   //Récupétation des données dans le html via l'ID
        
         
        if (commentaires.childElementCount > 0) {    // Vérifie s'il y a des critiques  à supprimer
            
            commentaires.removeChild(commentaires.lastChild);  // Vérifie s'il y à des critiques à supprimer

           
            commCounter--;   // Décrémente le compteur de critiques 
        }
    }

  
    document.getElementById("ajouter-critique").addEventListener("click", ajouterCommentaire);          //appel des fonctions lorsque le bouton est clicker
    document.getElementById("supprimer-critique").addEventListener("click", supprimerCommentaire);      //appel des fonctions lorsque le bouton est clicker
});

