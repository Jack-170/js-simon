// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// funzione per generare numeri random in un range
function genRandomNumberMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per generare e mostrare 5 numeri casuali
function generaNumeriCasuali() {
    let numeriCasualiDiv = document.getElementById("random-numbers");
    
    for (let i = 0; i < 5; i++) {
        let numeroCasuale = genRandomNumberMinMax(1, 100); 
        numeriCasualiDiv.innerHTML += "<p>Numero Casuale " + (i + 1) + ": " + numeroCasuale + "</p>";
    }

    const timer = 30;
    // imposto un timer di 30 secondi che deve rimuovermi i numeri
    setTimeout (function(){
        numeriCasualiDiv.innerHTML = ""; 
    },timer * 1000);

}generaNumeriCasuali();