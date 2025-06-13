/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/


// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21)
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: 'Christian',
  surname: 'Bottini',
  age: 21
}
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["JavaScript", "HTML", "CSS","C++"]
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("React")
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()


// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  // Genero un numero casuale compreso tra 1 e 6 (simulando il lancio di un dado)
  return Math.floor(Math.random() * 6) + 1
  // Math.random() genera un numero tra 0 (incluso) e 1 (escluso)
  // moltiplicandolo per 6 ottengo un valore da 0 a meno di 6
  // Math.floor arrotonda per difetto, ottenendo un intero tra 0 e 5 
  // e dopo sommando 1, il risultato finale sarà tra 1 e 6 inclusi
}
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(a, b) {
  // confronto i due valori 'a' e 'b'
  return a > b ? a : b // se 'a' è maggiore di 'b', restituisce 'a', altrimenti restituisce 'b'
}
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(str) {
  // Divido la stringa 'str' in un array di parole separate dagli spazi
  return str.split(" ")
  // la funzione split(" ") divide la stringa ogni volta che trova uno spazio
}
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(str, bool) {
  // se 'bool' è true, rimuove il primo carattere della stringa usando slice(1)
  return bool ? str.slice(1) : str.slice(0, -1) 
  // altrimenti, se 'bool' è false, rimuove l'ultimo carattere usando slice(0, -1)
}
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(str) {
  // Uso una espressione regolare per cercare tutte le cifre numeriche (0-9)
  // e le sostituisce con una stringa vuota, rimuovendole dalla stringa originale
  return str.replace(/[0-9]/g, "") 
}
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(email) {
  // Uso una regex per verificare se la stringa 'email' è nel formato corretto di un indirizzo email
  // almeno un carattere che non sia spazio o '@' prima della chiocciola
  // un carattere che non sia spazio o '@' dopo la chiocciola, seguito da un punto
  // e almeno un carattere che non sia spazio o '@' dopo il punto
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  // Restituisce true se la stringa è un'email valida, false se non lo è
}
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  // Creo un array con i nomi dei giorni della settimana,
  const days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
  // Recupero il giorno corrente come numero (0 = Domenica, 1 = Lunedì, etc...)
  // e lo uso come indice per far ritornare il nome del giorno corrispondente dall'array 'days'
  return days[new Date().getDay()]
}
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(n) {
  // Inizializzo un array vuoto per memorizzare i risultati dei lanci
  let values = []
  // faccio un ciclo 'n' volte per simulare il lancio del dado 'n' volte
  for (let i = 0; i < n; i++) {
    // chiamo la funzione 'dice()' che ritorna un numero casuale tra 1 e 6 e lo aggiunge all'array
    values.push(dice())
  } return {
    sum: values.reduce((acc, val) => acc + val, 0),
  // 'sum' fa la somma totale di tutti i valori ottenuti (usando reduce per sommare gli elementi dell'array)
    values: values,
  // 'values' l'array con tutti i valori estratti singolarmente
  }
}
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date) {
  // Creo un oggetto data per la data corrente
  const today = new Date()
  // converto la stringa 'date' passata come parametro in un oggetto Date per poter fare operazioni
  const past = new Date(date)
  // calcolo la differenza tra oggi e la data passata, in millisecondi
  const diff = today - past
  // Converto la differenza da millisecondi a giorni dividendo per il numero di millisecondi in un giorno
  // e uso Math.floor per arrotondare per difetto al numero intero di giorni trascorsi
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  const today = new Date() // Creo un oggetto Date con la data odierna
  return today.getDate() === 13 && today.getMonth() === 5
  // Controllo se la data odierna ha giorno 13 e mese 5 (giugno, perché i mesi partono da 0)
  // se entrambi sono veri, ritorna true (oggi è il compleanno), altrimenti false
}


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, prop) {
  // Elimino la proprietà 'prop' dall'oggetto 'obj' usando l'operatore delete
  // modifico direttamente l'oggetto originale rimuovendo la chiave specificata
  delete obj[prop]
  // ritorna l'oggetto modificato senza la proprietà eliminata
  return obj
}
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie() {
  // Uso reduce per iterare su tutti i film nell'array 'movies'
  // ogni iterazione confronta l'anno del film corrente con quello considerato il più recente finora
  // e poi restituisce il film con l'anno maggiore
  return movies.reduce((latest, movie) => {
  // Converte l'anno da stringa a numero con parseInt per poter fare il confronto numerico
  // Partendo dal primo film come riferimento iniziale
    return parseInt(movie.Year) > parseInt(latest.Year) ? movie : latest
  }, movies[0])

}
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies() {
  // Ritorna il numero totale di film presenti nell'array "movies"
  // .length restituisce la lunghezza dell'array, (gli elementi che contiene)
  return movies.length
}
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears() {
  // Uso map per creare un nuovo array contenente solo gli anni di uscita di ogni film
  // che accede alla proprietà 'Year' di ogni oggetto film
  return movies.map(movie => movie.Year)
}
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium() {
  return movies.filter(movie => parseInt(movie.Year) < 2000)
  // uso filter per ottenere solo i film con anno di uscita inferiore al 2000
  // converto la proprietà 'Year' da stringa a numero per il confronto
}
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears() {
  return movies.reduce((sum, movie) => sum + parseInt(movie.Year), 0)
  // Uso reduce per sommare tutti gli anni di uscita di tutti i film
  // La funzione accumulatore somma i valori convertiti in numero
}
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(keyword) {
  // Uso filter per trovare tutti i film il cui titolo contiene la parola 'keyword',
  // indipendentemente dal maiuscolo/minuscolo
  // converte entrambi i testi in minuscolo per il confronto case insensitive
  return movies.filter(movie => movie.Title.toLowerCase().includes(keyword.toLowerCase()))
}
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(keyword) {
  // Inizializzo due array vuoti per contenere i film che corrispondono o non corrispondono al criterio
  const match = []
  const unmatch = []
  for (let movie of movies) {
    // Controllo se il titolo del film contiene la parola 'keyword' 
    if (movie.Title.toLowerCase().includes(keyword.toLowerCase())) {
      // Se si, aggiunge il film all'array 'match'
      match.push(movie)
    } else {
      // Altrimenti lo aggiunge all'array 'unmatch'
      unmatch.push(movie)
    }
  }
  // Ritorna un oggetto con due proprietà: 'match' e 'unmatch' contenente i film trovati e quelli non trovati
  return { match, unmatch }
}
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(index) {
  // creo un nuovo array che contiene tutti i film tranne quello con indice 'index'
  // Uso filter per selezionare solo gli elementi il cui indice non è uguale a 'index'
  // L'underscore '_' indica che il primo elemento non è usato
  return movies.filter((_, i) => i !== index)
}
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainer() {
  // Seleziono e ritorna l'elemento DOM che ha l'id "container"
  // document.getElementById l'ho usato per selezionare un elemento con un id specifico
  return document.getElementById("container")
}
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectAllTDs() {
  // anche qui seleziono e ritornano tutti gli elementi <td> presenti nel documento HTML
  // document.querySelectorAll restituisce una NodeList
  // con tutti gli elementi che corrispondono al selettore CSS 'td'
  return document.querySelectorAll("td")
}
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function printTDText() {
  // Seleziono tutti gli elementi <td> della pagina
  const tds = document.querySelectorAll("td")
  // per ogni elemento <td>, stampa in console il suo contenuto testuale
  tds.forEach(td => console.log(td.textContent))
}
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function setRedBackgroundOnLinks() {
  // Seleziono tutti i link (<a>) della pagina
  const links = document.querySelectorAll("a")
  // per ogni link selezionato, imposta lo stile CSS del background color a rosso
  links.forEach(link => link.style.backgroundColor = "red")
}
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addListItem() {
  // Seleziono l'elemento <ul> con id "myList" dalla pagina HTML
  const ul = document.getElementById("myList")
  // Creo un nuovo elemento <li> vuoto
  const li = document.createElement("li")
  // Imposto il testo del nuovo <li> con la stringa "Nuovo elemento"
  li.textContent = "Nuovo elemento"
  // Aggiungo il nuovo <li> come ultimo figlio della lista <ul>, inserendolo nella pagina
  ul.appendChild(li)
}
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function emptyList() {
  // Seleziono la lista non ordinata (<ul>) con id "myList"
  const ul = document.getElementById("myList")
  // Imposto il contenuto HTML della lista a stringa vuota,
  // rimuovendo così tutti gli elementi figli di <li>
  ul.innerHTML = ""
}
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addTestClassToTRs() {
  // seleziono tutti gli elementi <tr> della pagina 
  const trs = document.querySelectorAll("tr")
  // per ogni elemento <tr>, aggiunge la classe CSS "test"
  trs.forEach(tr => tr.classList.add("test"))
}


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(height) {
  // Cicla da 1 fino all'altezza specificata (inclusa)
  for (let i = 1; i <= height; i++) {
    // Per ogni iterazione stampa una stringa di '*' ripetuti 'i' volte
    console.log("*".repeat(i))
  }
}
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(height) {
  // Cicla da 0 fino all'altezza meno uno
  for (let i = 0; i < height; i++) {
    // calcolo quanti spazi inserire per centrare la fila di asterischi: altezza - indice corrente - 1
    const spaces = " ".repeat(height - i - 1)
    // calcolo quanti asterischi stampare: 2 * i + 1 
    const stars = "*".repeat(i * 2 + 1)
    // Stampa la combinazione di spazi e asterischi, formando una piramide
    console.log(spaces + stars)
  }
}
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]