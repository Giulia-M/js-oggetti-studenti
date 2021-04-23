/*Descrizione:
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/

//oggetto 
var descrizioneStudente = {
    nome: "Giulia",
    cognome: "Maggio",
    eta: 27
};

//for in mi serve per estrapolare le proprietà dell'oggetto "descrizioneStudente" e le stampo con console.log
for (var key in descrizioneStudente) {
    console.log(descrizioneStudente[key]);
}

//array di oggetti
var arrayListaStudenti = [
    //indice 0
    {
        nome: "Gabriele",
        cognome: "Riccio",
        eta: 30
    },
    //indice 1  
    {
        nome: "Valentina",
        cognome: "Verdi",
        eta: 28
    },
    //indice 2
    {
        nome: "Giorgia",
        cognome: "Rossi",
        eta: 29
    }

]

// Ciclare su tutti gli studenti (che è un array, cioè arrayListaStudenti) e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < arrayListaStudenti.length; i++) {
    //con element recupero il mio primo oggetto nell'array "arrayListaStudenti"
    var element = arrayListaStudenti[i];

    //stampo nome e cognome di tutti gli studenti perchè sono nel ciclo for 
    console.log(element.nome)
    console.log(element.cognome)

}

/*
// attraverso 3 prompt() aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età
var inputNome = prompt("inserisci il tuo nome");
var inputCognome = prompt("Inserisci il tuo cognome");
var inputEta = parseInt(prompt("Inserisci la tua età"));

//oggetto con i valori descritti dall'utente 
var oggettoInputUtente = {
    nome: inputNome,
    cognome: inputCognome,
    eta: inputEta
}
//aggiungo nell'array "arrayListaStudenti" l'oggetto "oggettoInputUtente" 
arrayListaStudenti.push(oggettoInputUtente);
//stampo in console log l'array di oggetti 
console.log(arrayListaStudenti);

console.log(arrayListaStudenti[3].nome)
console.log(arrayListaStudenti[3].cognome)
console.log(arrayListaStudenti[3].eta)


*/

//soluzione Florian
var mappaRichieste = [
    {
        domanda: "inserisci il nome dello studente",
        chiave: "nome"
    },
    {
        domanda: "inserisci il cognome dello studente",
        chiave: "cognome"
    },
    {
        domanda: "inserisci l'età dello studente",
        chiave: "eta",
        validation: "numero"
    }
]


var nuovoStudente = {}

for (var i = 0; i < mappaRichieste.length; i++) {
    var oggMappa = mappaRichieste[i];
    var risultatoPrompt = prompt(oggMappa.domanda);
    var risultatoValidazione = true;

    if (oggMappa.validation === "numero") {
        risultatoPrompt = parseInt(risultatoPrompt);

        if (isNaN(risultatoPrompt)) {
            i--;
            risultatoValidazione = false;

            alert("L'età inserita non è valida");
        }
    }

    if (risultatoValidazione) {
        nuovoStudente[oggMappa.chiave] = risultatoPrompt;
    }
}






arrayListaStudenti.push(nuovoStudente)
console.log(arrayListaStudenti)