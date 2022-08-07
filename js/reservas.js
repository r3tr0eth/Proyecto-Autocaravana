function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

// Define the language reload anchors
var language = {
    es: {
        modelo:
            "Nuestros Modelos",

        //Menu
        auto:
            "Autocaravanas",
        nos:
            "Nosotros",
        con:
            "Condiciones",
        tar:
            "Tarifas",
        cont:
            "Contacto",
        res: "Reservar",
        //imagen Inicio
        text:
            "Haz tu reserva ahora",
        
        //Formulario
        text2:
        "Alquiler de Autocaravana",
    },
    eng: {
        modelo:
            "Our Models",

        //Menu
        auto:
            "Motorhomes",
        nos:
            "Us",
        con:
            "Conditions",
        tar:
            "Rates",
        cont:
            "Contact",
        res: "Booking",
        //imagen Inicio
        text:
            "Make your reserve now",
        text2:
        "Rent Motorhome",
    },
};

// Check if a hash value exists in the URL
if (window.location.hash) {

    // Set the content of the webpage
    // depending on the hash value
    if (window.location.hash == "#es") {
        siteContent.textContent = language.es.modelo;
        //Menu
        auto.textContent = language.es.auto;
        nos.textContent = language.es.nos;
        con.textContent = language.es.con;
        tar.textContent = language.es.tar;
        cont.textContent = language.es.cont;
        res.textContent = language.es.res;

        //imagen Inicio
        text.textContent = language.es.text;
        text2.textContent = language.es.text2;

    } else if (window.location.hash == "#eng") {
        siteContent.textContent = language.eng.modelo;
        //Menu
        auto.textContent = language.eng.auto;
        nos.textContent = language.eng.nos;
        con.textContent = language.eng.con;
        tar.textContent = language.eng.tar;
        cont.textContent = language.eng.cont;
        res.textContent = language.es.res;

        //imagen Inicio
        text.textContent = language.eng.text;
        text2.textContent = language.eng.text2;
    }
}    