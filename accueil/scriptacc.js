document.getElementById("boutonbiblio").addEventListener("click", function() {   //création de l'événement lorsque le bouton (boutonbiblio) est clicker
    
    document.body.style.backgroundImage = "url(../image/bibliothèque.jpg)";        //appel de l'image dans les fichiers, qui sera afficher en background
    document.body.style.backgroundSize = "100% 150%";                               //dimension de l'image
    
    
    setTimeout(function() {                                                     //insertion du temps
        window.location.href = "../bibliothèque/accueil.xhtml";                 //avant de nous amener sur le site de bibliothèque
    }, 1000);                                                                   //1000 = 1 seconde

});

document.getElementById("boutonsport").addEventListener("click", function() {       //création de l'évenement lorsque le bouton (boutonsport) est clicker
    
    document.body.style.backgroundImage = "url(../image/nba.jpg)";                  //appel de l'image dans les fichiers, qui sera afficher en arrière plan
    document.body.style.backgroundSize = "100% 150%";                               //dimension de l'image
    
    setTimeout(function() {                                                      //Insertion du temps
        window.location.href = "../basket/Basket.xhtml";                         //avant de nous amener dur le site basket
    }, 1000);                                                                    //1000 = 1seconde

});


function agrandir() {                                                            // création de la fonction agrandir(), qui est appeler dans le html lorsque un bouton est clicker
    var box = document.getElementById('profile');                                   //récuperation du div profile via son ID
    box.classList.toggle('plusgrand');                                              //transformation du div profile en plusgrand avec les caractéristique css
}

function agrandir2() {                                                           // création de la fonction agrandir2(), qui est appeler dans le html lorsque un bouton est clicker
    var box = document.getElementById('profile2');                                  //récuperation du div profile2 via son ID
    box.classList.toggle('plusgrand');                                              //transformation du div profile en plusgrand avec les caractéristique css
}