let img1 = document.getElementById("imgprojets");
let img2 = document.getElementById("imgprojetshover");

img1.addEventListener("mouseover", function() {
    img1.style.display = "none"; 
    img2.style.display = "block"; 
});

img2.addEventListener("mouseout", function() {
    img2.style.display = "none"; 
    img1.style.display = "block"; 
});
