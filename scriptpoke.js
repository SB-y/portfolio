document.getElementById("formPokemon").addEventListener("submit", afficherInfos);

async function afficherInfos(event) {
    event.preventDefault(); 

    const nomSaisi = document.getElementById("nom").value;
    const spaceNom = document.getElementById("nomPoke");
    const spacePoids = document.getElementById("poidsPoke");
    const spaceImg = document.getElementById("imgPoke");
    let sectionPokemon = document.getElementById("cartePk");
    sectionPokemon.innerHTML = ""; // pour réinitialiser la section avant nouvel affichage

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomSaisi}`);

        const data = await response.json();

        let carte = document.createElement("div");
        carte.classList.add("cartepoke");
        sectionPokemon.appendChild(carte);
        let titrePoke = document.createElement("p");
        carte.appendChild(titrePoke);
        carte.appendChild(spaceNom);
        carte.appendChild(spacePoids);
        carte.appendChild(spaceImg);
       
        titrePoke.textContent = `Carte Pokémon`;
        spaceNom.textContent =`Nom : ${data.name}`;
        spacePoids.textContent =`Poids : ${data.weight}kg`;
        spaceImg.innerHTML = `<img src="${data.sprites.front_shiny}">`;

    } catch (error) {
        spaceNom.textContent = "";
        spacePoids.textContent = "";
        spaceImg.textContent = "";
        alert("Erreur : Pokémon non trouvé.");
    }
}

