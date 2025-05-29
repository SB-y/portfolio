/*let imgcomp1 = document.getElementById("img1c");
let imghover1 = document.getElementById("img1_hover");
let imgcomp2 = document.getElementById("img2c");
let imghover2 = document.getElementById("img2_hover");
let imgcomp3 = document.getElementById("img3c");
let imghover3 = document.getElementById("img3_hover");


imgcomp1.addEventListener("mouseover", function() {
    imgcomp1.style.display = "none"; 
    imghover1.style.display = "block"; 
});

imghover1.addEventListener("mouseout", function() {
    imghover1.style.display = "none"; 
    imgcomp1.style.display = "block"; 
});

imgcomp2.addEventListener("mouseover", function() {
    imgcomp2.style.display = "none"; 
    imghover2.style.display = "block"; 
});

imghover2.addEventListener("mouseout", function() {
    imghover2.style.display = "none"; 
    imgcomp2.style.display = "block"; 
});

imgcomp3.addEventListener("mouseover", function() {
    imgcomp3.style.display = "none"; 
    imghover3.style.display = "block"; 
});

imghover3.addEventListener("mouseout", function() {
    imghover3.style.display = "none"; 
    imgcomp3.style.display = "block"; 
});
*/


const duos = [
  ["img1c", "img1_hover"],
  ["img2c", "img2_hover"],
  ["img3c", "img3_hover"],
];

for (let i = 0; i < duos.length; i++) {
  let img = document.getElementById(duos[i][0]);
  let imghover = document.getElementById(duos[i][1]);

  img.addEventListener("mouseover", function () {
    img.style.display = "none";
    imghover.style.display = "block";
  });

  imghover.addEventListener("mouseout", function () {
    imghover.style.display = "none";
    img.style.display = "block";
  });
}
