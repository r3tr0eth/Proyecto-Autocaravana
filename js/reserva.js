
function validateForm() {
    if (isEmpty(document.getElementById('data_2').value.trim())) {
        alert('First name is required!');
        return false;
    }
    if (isEmpty(document.getElementById('data_3').value.trim())) {
        alert('Last name is required!');
        return false;
    }
    if (isEmpty(document.getElementById('data_4').value.trim())) {
        alert('Phone is required!');
        return false;
    }
    if (isEmpty(document.getElementById('data_5').value.trim())) {
        alert('Email is required!');
        return false;
    }
    if (!validateEmail(document.getElementById('data_5').value.trim())) {
        alert('Email must be a valid email address!');
        return false;
    }
    if (isEmpty(document.getElementById('data_6').value.trim())) {
        alert('Requerido el dia de llegada!');
        return false;
    }
    if (isEmpty(document.getElementById('data_7').value.trim())) {
        alert('Requerido el dia de salida!');
        return false;
    }

    return true;
}

function isEmpty(str) { return (str.length === 0 || !str.trim()); }
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
    return isEmpty(email) || re.test(email);
}
function calculate() {
    var date1 = new Date(document.getElementById('data_6').value);
    var date2 = new Date(document.getElementById('data_7').value);
    var diffdays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
    if (diffdays < 3) {
        alert("Tienes que reservas más de 3 días");
    }
    var red1 = new Date("2023-01-01");
    var red2 = new Date("2023-01-31");
    var baj1 = new Date("2023-02-01");
    var baj2 = new Date("2023-04-30");
    var med1 = new Date("2023-05-01");
    var med2 = new Date("2023-06-30");
    var med3 = new Date("2022-09-01");
    var med4 = new Date("2022-12-31");
    var alt1 = new Date("2022-07-01");
    var alt2 = new Date("2022-08-31");
    document.getElementById("pricet").style.display = "block";

    if (date1 > alt1 && date2 < alt2) {
        //Temporada Alta
        var newprice = diffdays * 130;
     
        document.getElementById("price").style.display = "block";
        document.getElementById("price").innerHTML = newprice + "€";


    } else if (date1 > med1 && date2 < med2 || date1 > med3 && date2 < med4) {
        //Temporada Media
        var newprice = diffdays * 110;
        
        document.getElementById("price").style.display = "block";
        document.getElementById("price").innerHTML = newprice + "€";

    } else if (date1 > baj1 && date2 < baj2) {
        //Temporada Baja
        var newprice = diffdays * 100;
        document.getElementById("price").style.display = "block";
        document.getElementById("price").innerHTML = newprice + "€";

    }
    else if (date1 > red1 && date2 < red2) {
        //Temporada Reducida
        var newprice = diffdays * 90;
        document.getElementById("price").style.display = "block";
        document.getElementById("price").innerHTML = newprice + "€";

    }

}
