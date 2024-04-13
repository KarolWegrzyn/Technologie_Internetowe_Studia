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

window.onload = function() {
    wyswietlDate()
    wyswietlCzas();
};
