console.log('ok')
console.time()
/**
 * //SNACK 1
// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.
 */

const animali = [
    { 
        nome: 'leone', 
        famiglia: 'felidi', 
        classe: 'mammiferi',
    },
    { 
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi', 
    },
    { 
        nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli' 
    },
    { 
        nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli' 
    },
    { 
        nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli' 
    },
    { 
        nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli' 
    },
];

const mammiferi = animali.filter((element) =>{
    return element.classe === 'mammiferi';
})

console.log('Array di soli mammiferi:', mammiferi)


/**
 * // SNACK 2
// Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */

const clienti = [
    { 
        nome: 'Giuseppe', 
        cognome: 'Mandriani', 
        eta: randomNumber(1,30),
    },
    { 
        nome: 'Antonio', 
        cognome: 'Pluto', 
        eta: randomNumber(1,30),
    },
    { 
        nome: 'Pasquale', 
        cognome: 'Rossi', 
        eta: randomNumber(1,30),
    },
    { 
        nome: 'Aldo', 
        cognome: 'Verde', 
        eta: randomNumber(1,30),
    },
    { 
        nome: 'Paolo', 
        cognome: 'Marrone', 
        eta: randomNumber(1,30),
    },
    { 
        nome: 'Veronica', 
        cognome: 'Viola', 
        eta: randomNumber(1,30),
    },
    { 
        nome: 'Barbara', 
        cognome: 'Rossa', 
        eta: randomNumber(1,30),
    },
    { 
        nome: 'Michele', 
        cognome: 'Pesca', 
        eta: randomNumber(1,30),
    },
    { 
        nome: 'Davide', 
        cognome: 'Blu', 
        eta: randomNumber(1,30),
    },
    { 
        nome: 'Topolino', 
        cognome: 'Pink', 
        eta: randomNumber(1,30),
    },
]

// Metodo mio

const newClienti = clienti.map((element) =>{

        const {nome,cognome,eta} = element;

    if(element.eta >= 18){
        return {
            ...element,
            abilitato: 'può guidare',
        }
    } 
    
    return {
        ...element,
        abilitato: 'non può guidare',
    }    
})

console.log(newClienti)

newClienti.forEach((element) =>{
   
    console.log(`${element.nome} ${element.cognome} ${element.abilitato} perche ha: ${element.eta} anni` )
})


// // Ternario

// const newClienti = clienti.map((element) =>{
//     return element.eta >= 18 ? `${element.nome} ${element.cognome} può guidare` : `${element.nome} ${element.cognome} non può guidare`;
// })

// // Ternario abbreviato
// // const newClienti = clienti.map((element) =>{element.eta >= 18 ? `${element.nome} ${element.cognome} può guidare` : `${element.nome} ${element.cognome} non può guidare`;
// // })

// console.log(newClienti)




/**
 *
 * // SNACK 3
// Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano 
// che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false) ed il prezzo
// Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato. 
 
// { nome: 'XA123ES', marca: 'asus',  hasWindows: true, price: 1000, discountPrice: 800 }
 */

const computer = [
    {
        nome: 'Tipo1',
        marca: 'pippo',
        windows: true,
        prezzo: randomNumber(900,1000),
        sconto: (500,700),
    },
    {
        nome: 'Tipo2',
        marca: 'pluto',
        windows: true,
        prezzo: randomNumber(900,1000),
        sconto: (500,700),
    },
    {
        nome: 'Tipo3',
        marca: 'paperino',
        windows: false,
        prezzo: randomNumber(900,1000),
        sconto: (500,700),
    },
    {
        nome: 'Tipo4',
        marca: 'topolino',
        windows: true,
        prezzo: randomNumber(900,1000),
        sconto: (500,700),
    },
    {
        nome: 'Tipo5',
        marca: 'babbponatale',
        windows: false,
        prezzo: randomNumber(900,1000),
        sconto: (500,700),
    },
];
// console.log(computer)

const windowsPc = computer.filter(element => element.windows).map((element) =>{
    return {
        ...element,
        prezzoScontato: element.prezzo - element.sconto
    } 
});


console.log(windowsPc)

// const scontati = windowsPc.map((element) =>{

//     if (element.windows){
//         return {
//             ...element,
//             prezzoScontato: element.prezzo - element.sconto
//         } 
//     }

//     return element
// })

windowsPc.forEach((element) =>{
    const {nome,marca,prezzoScontato} = element
    console.log(`${nome} ${marca} ${prezzoScontato} $`)
})




console.log(windowsPc)

console.timeEnd();








/****************************************************************
 * FUNCTIONS
 ***********************************/

 function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
















