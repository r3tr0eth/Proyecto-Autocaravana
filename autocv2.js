
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

        //imagen Inicio
        text:
            "Nuestros Modelos",
        text2:
            "Todos nuestros vehículos tienen menos de 1 año",

        //Por que Elegirnos
        elegirnos:
            "¿Por qué elegirnos?",
        t1:
            "Trato cercano.",
        s1:
            "Saluda a unas vacaciones que nunca olvidarás.",
        t2:
            "Empieza tus vacaciones desde Benalmádena.",
        s2:
            "Nuestras autocaravanas son perfectas para aquellos que quieren viajar por España.",
        t3:
            "Totalmente equipadas.",
        s3:
            "Salga a la carretera con una de nuestras Autocaravanas.",
        t4:
            "Vehículos con menos de 1 año.",
        s4:
            "Nuestras Autocaravanas tienen menos de 1 año por lo cual aseguran pocos kiómetros y un desgaste reducido.",

        //Caracteristicas
        cara:
        "Caracteristicas",
    cara1:
        "Fiat Ducato Euro6 2.3 140 CV",
    cara2:
        "LLantas de aleación 16",
    cara3:
        "Traction plus",
    cara4:
        "Faros Antiniebla",
    cara5:
        "Panel solar",
    cara6:
        "Cámara trasera",
    cara7:
        "Capacidad máxima del tanque: agua clara, aguas grises 20 (120) / 120",
    cara8:
        "Aireador viesa holiday",
    cara9:
        "Toldo Fiamma",
    cara10:
        "Televisor Smart TV",
    cara11:
        "Bateria habitaculo",
    cara12:
        "Cable corriente 220W",
    cara13:
        "Botella ambiti WC",
    cara14:
        "Multimedia Pioneer Carplay",

    },
    eng: {
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

        //Imagen Inicio
        text:
            "Our Models",
        text2:
            "Our motorhomes are less than 1 year old",

        //Por que elegrinos
        elegirnos:
            "Why choose us?",
        t1:
            "Close treatment.",
        s1:
            "Say hello to a holiday you will never forget.",
        t2:
            "Start your holidays from Benalmádena.",
        s2:
            "Our motorhomes are perfect for those who want to travel around Spain.",
        t3:
            "Fully equipped.",
        s3:
            "Hit the road with one of our motorhomes.",
        t4:
            "Vehicles less than 1 year old.",
        s4:
            "Our motorhomes are less than 1 year old and therefore ensure low mileage and low wear and tear.",

        //Caracteristicas
        cara:
        "Features",
    cara1:
        "ELNAGH perfilada BARON 560 2.2 140 CV",
    cara2:
        "16' alloy wheels",
    cara3:
        "Traction plus",
    cara4:
        "Fog lamps",
    cara5:
        "Solar panel",
    cara6:
        "Rear camera",
    cara7:
        "Holiday aerator",
    cara8:
        "Maximum tank capacity: clear water, gray water 20 (120) / 120",
    cara9:
        "Toldo Fiamma",
    cara10:
        "Smart TV",
    cara11:
        "Cabin battery",
    cara12:
        "220W power cable",
    cara13:
        "Ambiti WC bottle",
    cara14:
        "5 beds",
    },

};

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

        //imagen Inicio
        text.textContent = language.es.text;
        text2.textContent = language.es.text2;

        //Por que elegirnos
        elegirnos.textContent = language.es.elegirnos;
        t1.textContent = language.es.t1;
        s1.textContent = language.es.s1;
        t2.textContent = language.es.t2;
        s2.textContent = language.es.s2;
        t3.textContent = language.es.t3;
        s3.textContent = language.es.s3;
        t4.textContent = language.es.t4;
        s4.textContent = language.es.s4;

       //Caracteristicas
       cara.textContent = language.es.cara;
       cara1.textContent = language.es.cara1;
       cara2.textContent = language.es.cara2;
       cara3.textContent = language.es.cara3;
       cara4.textContent = language.es.cara4;
       cara5.textContent = language.es.cara5;
       cara6.textContent = language.es.cara6;
       cara7.textContent = language.es.cara7;
       cara8.textContent = language.es.cara8;
       cara9.textContent = language.es.cara9;
       cara10.textContent = language.es.cara10;
       cara11.textContent = language.es.cara11;
       cara12.textContent = language.es.cara12;
       cara13.textContent = language.es.cara13;
       cara14.textContent = language.es.cara14;

    } else if (window.location.hash == "#eng") {
        //Menu
        auto.textContent = language.eng.auto;
        nos.textContent = language.eng.nos;
        con.textContent = language.eng.con;
        tar.textContent = language.eng.tar;
        cont.textContent = language.eng.cont;

        //imagen Inicio
        text.textContent = language.eng.text;
        text2.textContent = language.eng.text2;

        //Por que elegirnos
        elegirnos.textContent = language.eng.elegirnos;
        t1.textContent = language.eng.t1;
        s1.textContent = language.eng.s1;
        t2.textContent = language.eng.t2;
        s2.textContent = language.eng.s2;
        t3.textContent = language.eng.t3;
        s3.textContent = language.eng.s3;
        t4.textContent = language.eng.t4;
        s4.textContent = language.eng.s4;

         //Caracteristicas
         cara.textContent = language.eng.cara;
         cara1.textContent = language.eng.cara1;
         cara2.textContent = language.eng.cara2;
         cara3.textContent = language.eng.cara3;
         cara4.textContent = language.eng.cara4;
         cara5.textContent = language.eng.cara5;
         cara6.textContent = language.es.cara6;
         cara7.textContent = language.eng.cara7;
         cara8.textContent = language.eng.cara8;
         cara9.textContent = language.eng.cara9;
         cara10.textContent = language.eng.cara10;
         cara11.textContent = language.eng.cara11;
         cara12.textContent = language.eng.cara12;
         cara13.textContent = language.eng.cara13;
         cara14.textContent = language.eng.cara14;

    }
}