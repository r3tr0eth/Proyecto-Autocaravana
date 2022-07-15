function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

// Define the language reload anchors
var language = {
    es: {
        modelo:
            "Nuestros Modelos",
        tarifas:
            "Nuestras Tarifas",
        periodos:
            "Periodos",
        precios:
            "Precios",
    },
    eng: {
        modelo:
            "Our Models",
        tarifas:
            "Our Prices",
        periodos:
            "Periods",
        precios:
            "Prices",
    },
};

// Check if a hash value exists in the URL
if (window.location.hash) {

    // Set the content of the webpage
    // depending on the hash value
    if (window.location.hash == "#es") {
        siteContent.textContent = language.es.modelo;
        tarifas.textContent = language.es.tarifas;
        periodos.textContent = language.es.periodos;
        precios.textContent = language.es.precios;
    } else if (window.location.hash == "#eng") {
        siteContent.textContent = language.eng.modelo;
        tarifas.textContent = language.eng.tarifas;
        periodos.textContent = language.eng.periodos;
        precios.textContent = language.eng.precios;
    }
}
