// Prendere elemento HTML dalla pagina
// assegnare all'elemento HTMl una variabile

// Chiedere Nome utente
// nome in una variabile
// stampa nome nella console per verificare

// Chiedere cognome utente
// cognome in una variabile
// stampa cognome nella console per verificare

// Chiedere colore preferito
// colore in una variabile
// stampa colore nella console per verificare

// stampare il risutato della stringa nella console

// Iniettare contenuto stringa nella pagina


console.log('JS ok');

// Prendere elemento HTML dalla pagina
const result = document.getElementById('password');

// Chiedere Nome utente
const firstName = prompt("Qual'è il tuo nome?");
console.log(`Il tuo nome è ${firstName}`);

// Chiedere cognome utente
const lastName = prompt("Qual'è il tuo cognome?");
console.log(`Il tuo cognome è ${lastName}`);

// Chiedere colore preferito
const favColor = prompt("Qual'è il tuo colore preferito?")
console.log(`IL tuo colore preferito è ${favColor}`);

// Stampare il risutato della stringa nella console
const randomPassword = `La tua password è ${firstName}${lastName}${favColor}21`;
console.log(randomPassword);

// Iniettare contenuto stringa nella pagina
result.innerText = randomPassword;