/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


//Creo array con 5 numeri casuali e un array per le risposte dell'utente
let fiveNumbers = [];
let userNumbers = [];
let correctNumbers = [];

//"Stampo" i 5 numeri da ricordare in un alert.
rndArray();
console.log("Numeri Simon: " + fiveNumbers)

// Parte timer di 30 (5 secondi perchè Alessio è pigro) secondi.
var timeleft = 5;
var timer = setInterval(function(){
  
    if(timeleft == 0){
    clearInterval(timer);
    insertNumber();
  } else {
    console.log("Mancano " + timeleft + " secondi.");
  }
  timeleft--;
}, 1000);

/* -- FUNZIONI --*/

//Funzione per generare numeri casuali
function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Funzione per inserire i 5 numeri in un array + alert
function rndArray () {
    for (let i = 0; i < 5; i++) {
        fiveNumbers.push(rndNumber(1,100));
    }
    alert("RICORDA QUESTI NUMERI: "+ fiveNumbers);
}

//Funzione per chiedere i 5 numeri in successione
function insertNumber() {
    for (let i= 0; i < 5; i++) {
        let userNumber = parseInt(prompt("Inserisci numero."));
        userNumbers.push(userNumber);
        if (isInArray(fiveNumbers, userNumber) == true) {
            correctNumbers.push(userNumber);
        }      
    }
    console.log("Numeri inseriti: " + userNumbers);
    console.log("Numeri indovinati: " + correctNumbers.length + " --> (" + correctNumbers + ")");
}

//Funzione per controllare se i numeri inseriti sono in un array

function isInArray(array, element) {
    if (array.includes(element))
        return true;
    
    return false;
}