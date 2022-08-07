
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
        res: 
            "Reserva",
        //imagen Inicio
        text:
            "Alquiler de Autocaravanas J&J",
        text2:
            "Empieza tus vacaciones desde Benalmádena",
        text3:
            "Comienza tu viaje con nosotros",
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

        //Tarifas Y Precios
        tarifas:
            "Nuestras Tarifas",
        periodos:
            "Periodos",
        precios:
            "Precios",
        tem:
            "Temporada",
        per:
            "Periodo",
        red:
            "Reducida",
        red1:
            "Reducida",
        baj:
            "Baja",
        baj1:
            "Baja",
        med:
            "Media",
        med1:
            "Media",
        alt:
            "Alta",
        alt1:
            "Alta",
        redper:
            "1 ENERO – 28 FEBRERO",
        bajper:
            "1 MARZO – 30 ABRIL" +
            "\n\r 1 NOVIEMBRE – 31 DICIEMBRE",
        medper:
            "1 MAYO – 30 JUNIO" +
            "\n\r1 SEPTIEMBRE – 31 OCTUBRE" +
            "\n\r* Puentes y Festivos Nacionales",
        altper:
            "1 JULIO – 31 AGOSTO " +
            "\n\r * Semana Santa",
        min:
            "Mínimo",
        pre:
            "Precio",

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
        res:
            "Booking",
        //imagen Inicio
        text:
            "Motorhome Rental J&J",
        text2:
            "Start your vacations from Benalmádena",
        text3:
            "Start your trip with us",

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


        //Tarifas Y Precios
        tarifas:
            "Our Prices",
        periodos:
            "Periods",
        precios:
            "Prices",
        tem:
            "Season",
        tem1:
            "Season",
        per:
            "Period",

        red1:
            "Reduced",
        red:
            "Reduced",
        baj1:
            "Low",
        baj:
            "Low",
        med:
            "Medium",
        med1:
            "Medium",
        alt1:
            "High",
        alt:
            "High",
        redper:
            "1 JANUARY - 28 FEBRUARY",
        bajper:
            "1 MARCH - 30 APRIL" +
            "\n\r 1 NOVEMBER - 31 DECEMBER",
        medper:
            " 1 MAY - 30 JUNE " +
            "\n\r 1 SEPTEMBER - 31 OCTOBER " +
            "\n\r * Long weekends and national holidays",
        altper:
            "1 JULY - 31 AUGUST" +
            "\n\r * Easter",
        min:
            "Minimum",
        pre:
            "Price",
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
        text3.textContent = language.es.text3;
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

        //Tarifas y Precios
        tarifas.textContent = language.es.tarifas;
        periodos.textContent = language.es.periodos;
        precios.textContent = language.es.precios;
        tem.textContent = language.es.tem;
        tem1.textContent = language.es.tem1;
        per.textContent = language.es.per;
        red.textContent = language.es.red;
        red1.textContent = language.es.red1;
        baj.textContent = language.es.baj;
        baj1.textContent = language.es.baj1;
        med.textContent = language.es.med;
        med1.textContent = language.es.med; 1
        alt.textContent = language.eng.alt;
        alt1.textContent = language.es.alt1;
        redper.textContent = language.es.redper;
        bajper.textContent = language.es.bajper;
        medper.textContent = language.es.medper;
        altper.textContent = language.es.altper;
        min.textContent = language.es.min;
        pre.textContent = language.es.pre;

    } else if (window.location.hash == "#eng") {
        siteContent.textContent = language.eng.modelo;
        //Menu
        auto.textContent = language.eng.auto;
        nos.textContent = language.eng.nos;
        con.textContent = language.eng.con;
        tar.textContent = language.eng.tar;
        cont.textContent = language.eng.cont;
        res.textContent = language.eng.res;
        //imagen Inicio
        text.textContent = language.eng.text;
        text2.textContent = language.eng.text2;
        text3.textContent = language.eng.text3;

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

        //Tarifas y Precios
        tarifas.textContent = language.eng.tarifas;
        periodos.textContent = language.eng.periodos;
        precios.textContent = language.eng.precios;
        tem.textContent = language.eng.tem;
        tem1.textContent = language.eng.tem1;
        per.textContent = language.eng.per;
        red.textContent = language.eng.red;
        red1.textContent = language.eng.red1;
        baj.textContent = language.eng.baj;
        baj1.textContent = language.eng.baj1;
        med.textContent = language.eng.med;
        med1.textContent = language.eng.med; 1
        alt.textContent = language.eng.alt;
        alt1.textContent = language.eng.alt1;
        redper.textContent = language.eng.redper;
        bajper.textContent = language.eng.bajper;
        medper.textContent = language.eng.medper;
        altper.textContent = language.eng.altper;
        min.textContent = language.eng.min;
        pre.textContent = language.eng.pre;
    }
}