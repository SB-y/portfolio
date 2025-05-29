
document.getElementById("formContact").addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("nomErreur").textContent = "";
    document.getElementById("mailErreur").textContent = "";
    document.getElementById("telErreur").textContent = "";
    document.getElementById("messageErreur").textContent = "";

    try {
        let nom = document.getElementById("nom").value.trim();
        if (nom === "") {
            throw new Error("Merci de renseigner votre nom");
        }

        let mail = document.getElementById("mail").value.trim();
        if (mail === "") {
            throw new Error("Merci de renseigner votre adresse mail");
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(mail)) {
            throw new Error("Veuillez entrer une adresse mail valide");
        }

        let tel = document.getElementById("tel").value.trim();
        if (tel === "") {
            throw new Error("Merci de renseigner votre téléphone");
        }

        let telRegex = /^\d+$/;
        if (!telRegex.test(tel)) {
            throw new Error("Le téléphone doit contenir uniquement des chiffres");
        }

        let message = document.getElementById("message").value.trim();
        if (message === "") {
            throw new Error("Merci d'écrire un message");
        }

        alert("Merci de m'avoir contactée");
    }

    catch (error) {
        if (error.message.includes("nom")) {
            document.getElementById("nomErreur").textContent = error.message;
        } else if (error.message.includes("adresse")) {
            document.getElementById("mailErreur").textContent = error.message;
        } else if (error.message.includes("téléphone")) {
            document.getElementById("telErreur").textContent = error.message;
        } else if (error.message.includes("message")) {
            document.getElementById("messageErreur").textContent = error.message;
        }
    }

    finally {
        console.log("Vérification du formulaire effectuée");
    }

});


