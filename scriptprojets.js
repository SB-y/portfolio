function apparitionLiensCat() {
    let liens = document.getElementById("liensCat");

    let lienTous = document.createElement("button");
    lienTous.textContent = "| Tous |";
    lienTous.setAttribute("onClick", "apparitionGalerie(0)");
    liens.appendChild(lienTous);

    let lienCat1 = document.createElement("button");
    lienCat1.textContent = "| HTML/CSS/Javascript |";
    lienCat1.setAttribute("onClick", "apparitionGalerie(1)");
    liens.appendChild(lienCat1);

    let lienCat2 = document.createElement("button");
    lienCat2.textContent = "| Swift |";
    lienCat2.setAttribute("onClick", "apparitionGalerie(2)");
    liens.appendChild(lienCat2);

    let lienCat3 = document.createElement("button");
    lienCat3.textContent = "| CMS |";
    lienCat3.setAttribute("onClick", "apparitionGalerie(3)");
    liens.appendChild(lienCat3);

    let lienCat4 = document.createElement("button");
    lienCat4.textContent = "| UX Design |";
    lienCat4.setAttribute("onClick", "apparitionGalerie(4)");
    liens.appendChild(lienCat4);
}



const projets = [
    {
        nom: "Projet A",
        descriptif: "Lorem Ipsum Grooi Gjiuiez",
        categorie: 1,
        image: "images/a_cat1.jpeg",
        lien: "projet1.html"
    },
    {
        nom: "Appel d'API publique",
        descriptif: "A partir d'un formulaire, extraire des données suite à une requête HTTP.",
        categorie: 1,
        image: "images/b_cat1.png",
        lien: "projet2.html"
    },
    {
        nom: "Projet C",
        descriptif: "Lorem Ipsum Grooi Gjiuiez",
        categorie: 2,
        image: "images/a_cat2.jpeg",
        lien: "projet3.html"
    },
    {
        nom: "Projet D",
        descriptif: "Lorem Ipsum Grooi Gjiuiez",
        categorie: 3,
        image: "images/a_cat3.jpeg",
        lien: "projet4.html"
    },
    {
        nom: "Projet E",
        descriptif: "Lorem Ipsum Grooi Gjiuiez",
        categorie: 4,
        image: "images/a_cat4.jpeg",
        lien: "projet5.html"
    },
    {
        nom: "Projet F",
        descriptif: "Lorem Ipsum Grooi Gjiuiez",
        categorie: 4,
        image: "images/b_cat4.jpeg",
        lien: "projet6.html"
    },
];





function apparitionGalerie(numCat) {

    let galerieProjets = document.getElementById("galerie");
    galerieProjets.innerHTML = "";
    let projetsFiltres;
    let titre = document.getElementById("catTitre");
    titre.innerHTML = "";
    let titreCat;

    if (numCat === 0) {
        projetsFiltres = projets;
        titreCat = "- Tous";
    }
    if (numCat === 1) {
        projetsFiltres = projets.filter((obj) => obj.categorie === 1);
        titreCat = "- HTML/CSS/Javascript";
    }
    if (numCat === 2) {
        projetsFiltres = projets.filter((obj) => obj.categorie === 2);
        titreCat = "- Swift";
    }
    if (numCat === 3) {
        projetsFiltres = projets.filter((obj) => obj.categorie === 3);
        titreCat = "- CMS";
    }
    if (numCat === 4) {
        projetsFiltres = projets.filter((obj) => obj.categorie === 4);
        titreCat = "- UX Design";
    }



    projetsFiltres.forEach((obj) => {

        let projetArticle = document.createElement("article");
        galerieProjets.appendChild(projetArticle);

        let nomProjet = document.createElement("h3");
        nomProjet.textContent = obj.nom;
        projetArticle.appendChild(nomProjet);

        let imageProjet = document.createElement("img");
        imageProjet.src = obj.image;
        projetArticle.appendChild(imageProjet);

        let descriptifProjet = document.createElement("p");
        descriptifProjet.textContent = obj.descriptif;
        projetArticle.appendChild(descriptifProjet);

        let lienProjet = document.createElement("a");
        lienProjet.textContent = "En savoir plus";
        lienProjet.setAttribute("href", obj.lien);
        projetArticle.appendChild(lienProjet);

    }
    )

    titre.textContent = titreCat;
    titre.style.fontSize = "0.9em";
    titre.style.fontStyle = "italic";

}


apparitionGalerie(0);
apparitionLiensCat();