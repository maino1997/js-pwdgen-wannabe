// Chiedere Nome utente
// nome in una variabile
// Chiedere cognome utente
// cognome in una variabile
// Chiedere colore preferito
// colore in una variabile
// stampa nella console per verificare
// Prendere elemento HTML dalla pagina
// assegnare all'elemento HTMl una variabile
// stampare il risutato della stringa nella console
// Iniettare contenuto stringa nella pagina


console.log('JS ok');

// Prendere elemento HTML dalla pagina
const result = document.getElementById('password');

// Chiedere Nome utente
const firstName = prompt("Qual'è il tuo nome?");
console.log(firstName);

// Chiedere cognome utente
const lastName = prompt("Qual'è il tuo cognome?");
console.log(lastName);

// Chiedere colore preferito
const favColor = prompt("Qual'è il tuo colore preferito?")
console.log(favColor);

// Stampare il risutato della stringa nella console
const myString = `La tua password è ${firstName}${lastName}${favColor}21`;
console.log(myString);

// Iniettare contenuto stringa nella pagina
result.innerText = myString;