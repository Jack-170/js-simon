// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// funzione per generare numeri random in un range
function genRandomNumberMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// aggiungo un event listener per il bottone
 let bottonePlay = document.getElementById("play");


bottonePlay.addEventListener("click",() =>{
    let numeriCasualiGenerati = [];

    function generaNumeriCasuali() {
        let numeriCasualiDiv = document.getElementById("random-numbers");
    
        for (let i = 0; i < 5; i++) {
            // genero 5 numero casuale da 1 a 100 
            let numeroCasuale = genRandomNumberMinMax(1, 100); 
            // invio i numeri all'interno dell'array
            numeriCasualiGenerati.push(numeroCasuale);
            // creo dei p con classe numero-casuale con la funzione precedentemente creata
            let numbersParagraph = createMyElement("p", "numero-casuale");
            // inserisco il testo con il numero casuale all'interno dei paragrafi
            numbersParagraph.textContent = "Numero Casuale " + (i + 1) + ": " + numeroCasuale;
            // inserico i paragrafi dentro il div
            numeriCasualiDiv.append(numbersParagraph);
            
            
        }

        const timer = 30;
        // imposto un timer di 30 secondi che deve rimuovermi i numeri
        setTimeout(function() {
            numeriCasualiDiv.innerHTML = "";
            // richiamo la funzione creata per chiedere all'utente di inserire i numeri che saranno scomparsi
            chiediNumeriUtente();
            
            
        }, timer * 100);

    }


    // creo una funzione per chiedere i numeri all'utente
    function chiediNumeriUtente() {
        let numeriUtenteDiv = document.createElement("div");
      
        
        for (let i = 0; i < 5; i++) {
            // creo degli input number
            let inputNumero = document.createElement("input");
            inputNumero.type = "number";
            // creo delle label
            let label = document.createElement("label");
            label.textContent = "Numero Utente" + (i + 1) + ": ";
            // inserisco i vari input e le label all'interno del div
            numeriUtenteDiv.appendChild(label);
            numeriUtenteDiv.appendChild(inputNumero);
        }

        // creo un bottone "conferma"
        let confermaButton = document.createElement("button");
        confermaButton.textContent = "Conferma";
        confermaButton.addEventListener("click", () => {
        // creo un array vuoto
        let numeriInseriti = [];
        // seleziono tutti i numeri inseriti nell'imput
        let inputs = numeriUtenteDiv.querySelectorAll('input[type="number"]');
        // mando tutti i numeri inseriti nell'array vuoto
        inputs.forEach(input => {
            numeriInseriti.push(input.value);
        });
            // richiamo la funzione creata per confrontare i numeri
            confrontaNumeri(numeriInseriti);
        });

        numeriUtenteDiv.appendChild(confermaButton);
        document.body.appendChild(numeriUtenteDiv);
    }

    // creo una funzione che confronterà i numeri generati inizialmente e quelli inseriti dall'utente
    function confrontaNumeri(numeriUtente) {
        console.log("Numeri casuali generati:", numeriCasualiGenerati);
        console.log("Numeri inseriti dall'utente:", numeriUtente);

        // creo un nuovo elemento div
        let risultatoDiv = document.createElement("div");
        // inserico il div all'interno del body di html
        document.body.append(risultatoDiv);
        // creo un nuovo p all'interno del div
        let testoRisultato = document.createElement("p");
        // creo uno score
        let score= 0;   
        for (let i = 0; i < 5; i++) {
            // converto la stringa in numero
            let numeroUtente = parseInt(numeriUtente[i]);
            // aumento lo score se l'utente inserisce un numero corretto 
            if (numeroUtente === numeriCasualiGenerati[i]) {
                score++;
            }
        }
        if (score === 5) {
            testoRisultato.textContent = "Complimenti! Hai indovinato tutti i numeri!";
        } else {
            testoRisultato.textContent = "Hai indovinato " + score + " numeri su 5.";
        }

        console.log("Score:", score);
        // inserisco il risultato all'interno del div
        risultatoDiv.append(testoRisultato);
    }
    
    generaNumeriCasuali();
});









// funzione per creare un nuovo elemento con una classe
function createMyElement(tagtype , classname){
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);
    return currentElement;
  };