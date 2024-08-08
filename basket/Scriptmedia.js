
document.getElementById("bouttonjeux").addEventListener("click", function() {  //Creation de l'évenement lorsque le bouton est clicker
    let imgTag = document.getElementById('imgjeux');  //Récupération du div à changer
    imgTag.src = '../image/pourmedia/pourmedia.jpg';  //Changement de l'image lorsqu'elle est clicker
    let bTag = document.querySelectorAll('p b');       //Récupération de l'endroit ou changer le text
    bTag[0].textContent= 'Kareem Abdul-Jabbar : , légende du basketball américain, détient le record de six titres de MVP (meilleur joueur) de la NBA, une distinction qui souligne son immense contribution au sport.'; // modification !
});// changement du text 




const prevBtn = document.querySelector('.prev');  // Récuprétation du bouton prev
const nextBtn = document.querySelector('.next');  // Récuprétation du bouton next
const photos = document.querySelector('.photos');   //Récupétation des element photo

let currentIndex = 0;     //initialisation de currentIndex à 0 
const totalPhotos = document.querySelectorAll('.photos img').length;          // intialisation de totalphotos avec le nombre des photos  
const photoWidth = document.querySelector('.photos img').clientWidth;          //initialisation de photoWith avec la taille des photos

function navigate(direction) {
  if (direction === 'next') {
      currentIndex++;                                       //currentIndex prend + 1
      if (currentIndex === totalPhotos) {                   //Si currentIndex est egal au nombre total de photo
          currentIndex = 0;                                 // Revenir au debut
      }
  } else {
      currentIndex--;                                       //currentIndex prend -1 
      if (currentIndex < 0) {                               //si curentIndex est inferieur a 0 
          currentIndex = totalPhotos - 1;                   //revenir a la fin
      }
  }
  photos.style.transform = `translateX(${-currentIndex * photoWidth}px)`;    //transforme l'affichage
}


prevBtn.addEventListener('click', () => navigate('prev'));  // Appelle de la fonction en fonction du bouton clicker (ici prev)
nextBtn.addEventListener('click', () => navigate('next'));  // Appelle de la fonction en fonction du bouton clicker (ici next)



