function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

// Define the language reload anchors
var language = {
    es: {
        
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
        nom:
        "Nombre",
        ape:"Apellido",
        tel:"Teléfono",
        email:"Email",
        choose:"Elige Autocaravana",
        fecha1:"Fecha de inicio",
        fecha2:"Fecha de regreso",
        pricefi:"Precio Fianza:",
        pricet:"Precio Total:",
        coment:"Comentario / Preguntas",
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
        nom:
        "Name",
        ape:"Last Name",
        tel:"Telephone",
        email:"Email",
        choose:"Choose Motorhome",
        fecha1:"Start Date",
        fecha2:"Return date",
        pricefi:"Deposit Price:",
        pricet:"Total Price:",
        coment:"Comment / Questions",
    },
};

// Check if a hash value exists in the URL
if (window.location.hash) {

    // Set the content of the webpage
    // depending on the hash value
    if (window.location.hash == "#es") {
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
        nom.textContent = language.es.nom;
        ape.textContent = language.es.ape;
        tel.textContent = language.es.tel;
        email.textContent = language.es.email;
        choose.textContent = language.es.choose;
        fecha1.textContent = language.es.fecha1;
        fecha2.textContent = language.es.fecha2;
        pricefi.textContent = language.es.pricefi;
        pricet.textContent = language.es.pricet;
        coment.textContent = language.es.coment;

    } else if (window.location.hash == "#eng") {
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
        nom.textContent = language.eng.nom;
        ape.textContent = language.eng.ape;
        tel.textContent = language.eng.tel;
        email.textContent = language.eng.email;
        choose.textContent = language.eng.choose;
        fecha1.textContent = language.eng.fecha1;
        fecha2.textContent = language.eng.fecha2;
        pricefi.textContent = language.es.pricefi;
        pricet.textContent = language.eng.pricet;
        coment.textContent = language.eng.coment;
    }
}    

