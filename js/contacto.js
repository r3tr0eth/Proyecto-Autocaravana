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
        //imagen Inicio
        text:
            "Alquiler de Autocaravanas J&J",
        text2:
            "Empieza tus vacaciones desde Benalmádena",
            text3:
            "Comienza tu viaje con nosotros",
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
            //imagen Inicio
            text:
                "Motorhome Rental J&J",
            text2:
                "Start your vacations from Benalmádena",
                text3:
                "Start your trip with us",
            
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
        
                //imagen Inicio
                text.textContent = language.es.text;
                text2.textContent = language.es.text2;
                text3.textContent = language.es.text3;

    } else if (window.location.hash == "#eng") {
        siteContent.textContent = language.eng.modelo;
        //Menu
        auto.textContent = language.eng.auto;
        nos.textContent = language.eng.nos;
        con.textContent = language.eng.con;
        tar.textContent = language.eng.tar;
        cont.textContent = language.eng.cont;

        //imagen Inicio
        text.textContent = language.eng.text;
        text2.textContent = language.eng.text2;
        text3.textContent = language.eng.text3; }
    }