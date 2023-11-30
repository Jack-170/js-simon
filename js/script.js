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
            let numeroCasuale = genRandomNumberMinMax(1, 100); 
            numeriCasualiGenerati.push(numeroCasuale);
            let numbersParagraph = createMyElement("p", "numero-casuale"); 
            numbersParagraph.textContent = "Numero Casuale " + (i + 1) + ": " + numeroCasuale;
            numeriCasualiDiv.append(numbersParagraph);
            
            
        }

        const timer = 30;
        // imposto un timer di 30 secondi che deve rimuovermi i numeri
        setTimeout(function() {
            numeriCasualiDiv.innerHTML = "";
            chiediNumeriUtente();
            
            
        }, timer * 1000);

    }


    // creo una funzione per chiedere i numeri all'utente
    function chiediNumeriUtente() {
        let numeriUtenteDiv = document.createElement("div");
      
        
        for (let i = 0; i < 5; i++) {
            // creo un input number
            let inputNumero = document.createElement("input");
            inputNumero.type = "number";
            // creo una label
            let label = document.createElement("label");
            label.textContent = "Numero Utente" + (i + 1) + ": ";
            // inserisco l'input e la label all'interno del div
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

            confrontaNumeri(numeriInseriti);
        });

        numeriUtenteDiv.appendChild(confermaButton);
        document.body.appendChild(numeriUtenteDiv);
    }

    // creo una funzione che confronterà i numeri generati inizialmente e quelli inseriti dall'utente
    function confrontaNumeri(numeriUtente) {
        let risultatoDiv = document.createElement("div");
        risultatoDiv.id = "risultato-confronto";
        document.body.appendChild(risultatoDiv);

        let testoRisultato = document.createElement("p");
        let corrispondenze = 0;
        for (let i = 0; i < 5; i++) {
            let numeroUtente = parseInt(numeriUtente[i]); // Converti il numero utente in intero
            if (numeroUtente === numeriCasualiGenerati[i]) {
                corrispondenze++;
            }
        }

        if (corrispondenze === 5) {
            testoRisultato.textContent = "Complimenti! Hai indovinato tutti i numeri!";
        } else {
            testoRisultato.textContent = "Hai indovinato " + corrispondenze + " numeri su 5.";
        }

        risultatoDiv.appendChild(testoRisultato);
    }

    generaNumeriCasuali();
});









// funzione per creare un nuovo elemento con una classe
function createMyElement(tagtype , classname){
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);
    return currentElement;
  };