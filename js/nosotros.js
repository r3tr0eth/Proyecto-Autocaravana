function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

// Define the language reload anchors
var language = {
    es: {
        modelo:
            "Quienes Somos",
            submodel:"Empieza tus vacaciones en Benalmádena",
        titulo:
        "Alquiler de autocaravanas en Benálmadena",
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
            cont2:
            "Contactanos",
            fran:"Propietario muy amable, disponible y complaciente.",
            yol:"Ha sido muy fácil tratar con ellos, fantasticos!",
            jor:"Las mejores vacaciones. Os alquilaremos más de una vez.",
        //imagen Inicio
        text:
            "Alquiler de Autocaravanas J&J",
        text2:
            "Testimonios",
        text3:
            "Opiniones de algunos de nuestros clientes.",
            ti1:"Somos una empresa dedicada al alquiler de autocaravanas en España.",
            id1:"Queremos dar a nuestros clientes el máximo esfuerzo y rendimiento, para que tengan una experiencia inolvidable.",
id2:"Trabajamos con nuestro principal objetivo, que es atenderle en todo momento, desde el primer contacto",
id3:"hasta el final del alquiler, ya que nos preocupamos por el más mínimo detalle, para que usted a su vez  se enamore de la libertad y la comodidad de viajar en una Autocaravana.",
cont:"Contactanos",
    },
    eng: {
        modelo:
            "Who are we",
            submodel:
            "Start your vacations from Benalmádena",
            titulo:
            "Rent motorhome in Benalmádena",
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
            cont2:
            "Contact us",
            fran:"Very friendly, available and accommodating owner",
            yol:"They were very easy to deal with, fantastic!",
            jor:"The best vacations. We will rent you more than once",
        //imagen Inicio
        text:
            "Motorhome Rental J&J",
        text2:
            "Testimonials",
        text3:
            "Feedback from some of our customers",

            ti1:"We are a company dedicated to the rental of motorhomes in Spain.",
            id1:"We want to give our customers the maximum effort and performance, so that they have an unforgettable experience.",
id2:"We work with our main objective, which is to serve you at all times, from the first contact",
id3:"until the end of the rental, because we care about the smallest detail, so that you in turn fall in love with the freedom and comfort of traveling in a motorhome.",
cont:"Contact us",
    },
};

// Check if a hash value exists in the URL
if (window.location.hash) {

    // Set the content of the webpage
    // depending on the hash value
    if (window.location.hash == "#es") {
        modelo.textContent = language.es.modelo;
        submodel.textContent = language.es.submodel;
        titulo.textContent = language.es.titulo;
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
        ti1.textContent = language.es.ti1;
        id1.textContent = language.es.id1;
        id2.textContent = language.es.id2;
        id3.textContent = language.es.id3;
        cont.textContent = language.es.cont;
        cont2.textContent = language.es.cont2;

    } else if (window.location.hash == "#eng") {
        modelo.textContent = language.eng.modelo;
        submodel.textContent = language.eng.submodel;
        titulo.textContent = language.eng.titulo;

        //Menu
        auto.textContent = language.eng.auto;
        nos.textContent = language.eng.nos;
        con.textContent = language.eng.con;
        tar.textContent = language.eng.tar;
        cont.textContent = language.eng.cont;

        //imagen Inicio
        text.textContent = language.eng.text;
        text2.textContent = language.eng.text2;
        text3.textContent = language.eng.text3;
        ti1.textContent = language.eng.ti1;
        id1.textContent = language.eng.id1;
        id2.textContent = language.eng.id2;
        id3.textContent = language.eng.id3;
        cont.textContent = language.eng.cont;
        cont2.textContent = language.eng.cont2;

    }
}        