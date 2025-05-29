function apparitionNav() {
    let header = document.getElementsByTagName("header");

    let navigateur = document.getElementById("navigation");

    let lien1 = document.createElement("a");
    lien1.textContent = "Accueil";
    lien1.setAttribute("href", "index.html");
    lien1.classList.add("lienaccueil");
    navigateur.appendChild(lien1);

    let lien2 = document.createElement("a");
    lien2.textContent = "A propos";
    lien2.setAttribute("href", "apropos.html");
    lien2.classList.add("lienapropos");
    navigateur.appendChild(lien2);

    let lien3 = document.createElement("a");
    lien3.textContent = "Projets";
    lien3.setAttribute("href", "portfolio.html");
    lien3.classList.add("lienportfolio");
    navigateur.appendChild(lien3);

    let lien4 = document.createElement("a");
    lien4.textContent = "Contact";
    lien4.setAttribute("href", "contact.html");
    lien4.classList.add("liencontact");
    navigateur.appendChild(lien4);
}



function apparitionFooter() {
    let footerContainer = document.getElementById("footer");
    let texte = document.createElement("p");
    texte.textContent = "2025 - Mon portfolio - Sarah Ben Hamida";
    footerContainer.appendChild(texte);
}



apparitionNav();
apparitionFooter();



