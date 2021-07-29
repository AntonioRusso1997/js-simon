/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


//Creo array con 5 numeri casuali
let fiveNumbers = [];

//Ciclo for per pushare i 5 numeri casuali nell'array creato in precedenza.
for (let i = 0; i < 5; i++) {
    fiveNumbers.push(rndNumber(1,100) + " ");
}

// "Stampo" i 5 numeri da ricordare.
alert("RICORDA QUESTI NUMERI: "+ fiveNumbers);






/* -- FUNZIONI --*/

//Funzione per generare numeri casuali
function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}