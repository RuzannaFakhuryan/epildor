// Liste des images dans le dossier image/
const images = ["https://postimg.cc/d7skyLBf", "photo2.jpg", "photo3.jpg"];
let indexImage = 0;

// Sélectionner l'image et le bouton
const maImage = document.getElementById("maImage");
const bouton = document.getElementById("changerImage");

// Changer l'image au clic
bouton.addEventListener("click", function() {
    indexImage++;
    if (indexImage >= images.length) {
        indexImage = 0; // revenir à la première image
    }
    maImage.src = "image/" + images[indexImage];
});
