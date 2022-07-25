
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
      "Nuestras Tarifas",
    text2:
      "Mejores alquileres relación calidad-precio",
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
      "Our Rates",
    text2:
      "Best value for money motorhome rentals",

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
    //Menu
    auto.textContent = language.eng.auto;
    nos.textContent = language.eng.nos;
    con.textContent = language.eng.con;
    tar.textContent = language.eng.tar;
    cont.textContent = language.eng.cont;
    
    //imagen Inicio
    text.textContent = language.eng.text;
    text2.textContent = language.eng.text2;

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