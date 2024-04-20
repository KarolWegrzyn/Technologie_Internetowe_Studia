var idOperacji=0;

function wyczyscliste(){
    var myTable = document.getElementById("myTable");
    // Pobieramy wszystkie wiersze z tabeli
    var rows = myTable.getElementsByTagName("tr");

    // Usuwamy wiersze, zaczynając od końca, aby uniknąć problemów z iteracją
    for (var i = rows.length - 1; i > 0; i--) {
        myTable.deleteRow(i);
    }
    idOperacji=0;
}

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

function sprawdzCzyLiczba(dane) {
    if (isNaN(dane)) {
        console.log(false)
        return false; // Wartość nie jest liczbą
    } else {
        console.log(true)
        return true; // Wartość jest liczbą
    }
}

function dodawanie(){
    var input1 = document.getElementById("input1_+");
    var input2 = document.getElementById("input2_+");

    if(sprawdzCzyLiczba(input1.value) && sprawdzCzyLiczba(input2.value)){
        console.log(parseFloat(input1.value) + parseFloat(input2.value));

        idOperacji++;
        var tabela = document.querySelector("table");
        var nowyWiersz = tabela.insertRow(1);

        var komorka1 = nowyWiersz.insertCell(0);
        var komorka2 = nowyWiersz.insertCell(1);
        var komorka3 = nowyWiersz.insertCell(2);

        komorka1.innerHTML = idOperacji;
        komorka2.innerHTML = parseFloat(input1.value) + " + " + parseFloat(input2.value) + " = X";
        komorka3.innerHTML = parseFloat(input1.value) + parseFloat(input2.value);
    }
    else{
        alert("Podaj poprawne dane!");
    }

}

function dzielenie(){
    var input1 = document.getElementById("input1_/");
    var input2 = document.getElementById("input2_/");

    if(sprawdzCzyLiczba(input1.value) && sprawdzCzyLiczba(input2.value)){
     console.log(parseFloat(input1.value) / parseFloat(input2.value));

        idOperacji++;
        var tabela = document.querySelector("table");
        var nowyWiersz = tabela.insertRow(1);

        var komorka1 = nowyWiersz.insertCell(0);
        var komorka2 = nowyWiersz.insertCell(1);
        var komorka3 = nowyWiersz.insertCell(2);

        komorka1.innerHTML = idOperacji;
        komorka2.innerHTML = parseFloat(input1.value) + " / " + parseFloat(input2.value) + " = X";

        if(parseFloat(input2.value)!=0)
            komorka3.innerHTML = parseFloat(input1.value) / parseFloat(input2.value);
        else
            komorka3.innerHTML = "ERROR"
    }
    else{
        alert("Podaj poprawne dane!");
    }

}

function rowkwadrat(){
    var input1 = document.getElementById("input1_x");
    var input2 = document.getElementById("input2_x");
    var input3 = document.getElementById("input3_x");

    if(sprawdzCzyLiczba(input1.value) && sprawdzCzyLiczba(input2.value)){
        idOperacji++;
        var tabela = document.querySelector("table");
        var nowyWiersz = tabela.insertRow(1);

        var komorka1 = nowyWiersz.insertCell(0);
        var komorka2 = nowyWiersz.insertCell(1);
        var komorka3 = nowyWiersz.insertCell(2);

        var a = parseFloat(input1.value)
        var b = parseFloat(input2.value)
        var c = parseFloat(input3.value)

        var delta = b * b - 4 * a * c;
        var pierwiastekDelta = Math.sqrt(delta);
        var x1, x2;

        komorka1.innerHTML = idOperacji;

        if(b>0 && c>0)
            komorka2.innerHTML = a +" x^2 + "+ b +" x + "+ c;
        else if(b>0)
            komorka2.innerHTML = a +" x^2 + "+ b +" x "+ c;
        else if(b<0 && c<=0)
            komorka2.innerHTML = a +" x^2 "+ b +" x "+ c;
        else if(b<0 && c>0)
            komorka2.innerHTML = a +" x^2 "+ b +" x +"+ c;

        if (delta > 0) {
            x1 = (-b + pierwiastekDelta) / (2 * a);
            x2 = (-b - pierwiastekDelta) / (2 * a);
            komorka3.innerHTML =  x1 + "       " +x2;
        } else if (delta === 0) {
            x1 = -b / (2 * a);
            komorka3.innerHTML = x1;
        } else {
            komorka3.innerHTML = "ERROR Δ < 0"; // Brak rozwiązań, delta < 0
        }
    }
    else{
        alert("Podaj poprawne dane!");
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
            dodawanie()
            break;
        }
       case "2":
        {
            dzielenie()
            break;
        }
        case "3":
        {
            rowkwadrat()
            break;
        }
    }
}

window.onload = function() {
    wyswietlDate()
    wyswietlCzas();
};

const roz_men = document.querySelector(".roz_men");
const menu = document.querySelector(".menu");

const showMenu = () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};

roz_men.addEventListener("click", showMenu);

window.addEventListener("resize", () => {
  if (window.innerWidth < 600) {
    document.querySelector(".menu").style.display = "none";
  } else {
    document.querySelector(".menu").style.display = "block";
  }
});