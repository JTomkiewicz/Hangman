var tablicaHasel = ["Komu w droge temu czas", "Bez pracy nie ma kolaczy", "Fortuna kolem sie toczy" , "Apetyt rosnie w miare jedzenia", "Nie chwal dnia przed zachodem slonca", "Grosz do grosza bedzie kokosza", "Atak jest najlepsza obrona"];

var numerLosowy = rand(0, 6);
var haslo = tablicaHasel[numerLosowy];
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ileSkuch = 0;
var haslo1 = "";

for (i = 0; i < dlugosc; i++) {
    if( haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

function rand( min, max ){
    min = parseInt( min, 10 );
    max = parseInt( max, 10 );

    if ( min > max ){
        var tmp = min;
        min = max;
        max = tmp;
    }

    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

function wypiszHaslo() {
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = ["A","Ą","B", "C", "Ć","D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N","Ń", "O","Ó", "P","Q","R", "S","Ś", "T", "U", "V","W", "X", "Y", "Z", "Ź", "Ż"];

function start() {

    var trescDiva = "";

    for (i = 0; i <= 34; i++) {
        var element = "lit" + i;
        trescDiva = trescDiva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';
        if ((i + 1) % 7 == 0) trescDiva = trescDiva + '<div style="clear: both;"></div>';
    }

    document.getElementById("alfabet").innerHTML = trescDiva;

    wypiszHaslo();
}

String.prototype.ustawZnak = function(miejsce, znak) {
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}

function sprawdz(nr) {

    var trafiona = false;

    for (i = 0; i < dlugosc; i++) {
        if(haslo.charAt(i) == litery[nr]) {
            haslo1 = haslo1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }

    if (trafiona) {
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        
        wypiszHaslo()
    }
    else {
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");

        ileSkuch++;
        var obraz = "img/s" + ileSkuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="' + obraz + '" alt="" />';
    }

    if(haslo == haslo1) document.getElementById("alfabet").innerHTML = "Podano prawidlowe haslo! " + haslo + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ? </span>'

    if(ileSkuch >= 9) document.getElementById("alfabet").innerHTML = "Przegrales! Haslo to: " + haslo + '<br/><br/><span class="resetFail" onclick="location.reload()">JESZCZE RAZ? </span>'
}