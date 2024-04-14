function wyswietlCzas() {
    var dzisiaj = new Date();
    var godzina = dzisiaj.getHours();
    var minuty = dzisiaj.getMinutes();
    var sekundy = dzisiaj.getSeconds();
    godzina = dodajZero(godzina);
    minuty = dodajZero(minuty);
    sekundy = dodajZero(sekundy);
    document.getElementById('czas').innerHTML = godzina + ":" + minuty + ":" + sekundy;
    setTimeout(wyswietlCzas, 1000);
}

function wyswietlDate() {
    var dzisiaj = new Date();
    var miesiace = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
                    "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
    var dzien = dzisiaj.getDate();
    var miesiac = miesiace[dzisiaj.getMonth()];
    var rok = dzisiaj.getFullYear();
    var data = dzien + " " + miesiac + " " + rok;
    document.getElementById("data").innerHTML = data;
}

function dodajZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function showInput(inputType) {
    var allInputs = document.querySelectorAll('div[id$="Input"]');
    allInputs.forEach(function(input) {
        input.style.display = 'none';
    });

    var inputToShow = document.getElementById(inputType + 'Input');
    inputToShow.style.display = 'block';
}

function dodawanie(){
    var input1 = document.getElementById("input1_+");
    var input2 = document.getElementById("input2_+");

    console.log(parseFloat(input1.value) + parseFloat(input2.value));
    alert(parseFloat(input1.value) + parseFloat(input2.value));
}

function dzielenie(){
    var input1 = document.getElementById("input1_/");
    var input2 = document.getElementById("input2_/");

    console.log(parseFloat(input1.value) / parseFloat(input2.value));
    alert(parseFloat(input1.value) / parseFloat(input2.value));
}

function rowkwadrat(){
    var input1 = document.getElementById("input1_x");
    var input2 = document.getElementById("input2_x");
    var input3 = document.getElementById("input3_x");

    var a = parseFloat(input1.value)
    var b = parseFloat(input2.value)
    var c = parseFloat(input3.value)

    var delta = b * b - 4 * a * c;
    var pierwiastekDelta = Math.sqrt(delta);
    var x1, x2;

    if (delta > 0) {
        x1 = (-b + pierwiastekDelta) / (2 * a);
        x2 = (-b - pierwiastekDelta) / (2 * a);
        console.log("wynik: " ,x1, x2);
    } else if (delta === 0) {
        x1 = -b / (2 * a);
        console.log("wynik: " ,x1)
    } else {
        return []; // Brak rozwiązań, delta < 0
    }
}

function sprawdzZaznaczenie() {
    var radioButtons = document.getElementsByName("myRadio");
    var dzialanie;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            dzialanie = radioButtons[i].value;
            console.log("Zaznaczony przycisk radio: ", dzialanie);
            break; // przerywamy pętlę, gdy znajdziemy zaznaczony przycisk
        }
    }

    wywolaj_dzialanie(dzialanie);
}

function wywolaj_dzialanie(x){
    switch(x){
    case "1":
    {
        console.log("dziala case 1");
        break;
    }
   case "2":
    {
        console.log("dziala case 2");
        break;
    }
    case "3":
    {
        console.log("dziala case 3");
        break;
    }

    }
}

window.onload = function() {
    wyswietlDate()
    wyswietlCzas();
};
