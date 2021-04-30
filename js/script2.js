/**
 * // Snack 1
Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
- Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" (le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci) e aggiungere, sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear". Quest'ultima proprietà conterrà l'anno (mettete un valore voi, è necessario inserire valore reale) in cui l'azienda è stata fondata. 
 */


// Metodo 1 Array di stringhe

console.log('********************* Snack 1 ***********************')

console.log('**** Metodo 1 ***')

const brands = [];


const nameBrands = ['Sony','Gucci','Apple', 'Samsung', 'Dolce&Gabbana', 'Pippo', 'Pluto','Topolino', 'Paperino', 'Pluto']

console.log('Array nomi brand Capitalize: ',nameBrands)

const newBrands = nameBrands.map((element,index) =>{
        return {
            name: element.toLowerCase(),
            foundationYear: randomNumber(1900,2000)
        }
})


console.log('Array oggetti brand non capitalize e con nuova proprietà ',newBrands)


// Metodo 2 Array di oggetti

const marche = [
    {
        name: 'Tipo',
    },
    {
        name: 'Punto',
    },
    {
        name: 'Fiat',
    },
    {
        name: 'Audi',
    },
    {
        name: 'Golf',
    },
]

const newMarche = marche.map((element) =>{
    return{
        name: element.name.toLowerCase(),
        foundationYear: randomNumber(1900,2000)

    }
})
console.log('************ Metodo 2 *****************')
console.log(newMarche)



// Prova stringa come array 

// let nome = 'giuseppe';

// nome.forEach((element)=>{
//     console.log(nome[element])
// })





/**
 * // Snack 2
Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
- Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
- Infine stampa separatamente i 3 array.
 */

console.log(' ********************************* Snack 2 ************************')


const automobili = [
    {
        marca: 'Audi',
        modello: randomNumber(1,20),
        alimentazione: 'benzina'

    },
    {
        marca: 'Fiat',
        modello: randomNumber(1,20),
        alimentazione: 'diesel'

    },
    {
        marca: 'Alfa',
        modello: randomNumber(1,20),
        alimentazione: 'benzina'

    },
    {
        marca: 'Renault',
        modello: randomNumber(1,20),
        alimentazione: 'diesel'

    },
    {
        marca: 'Pippo',
        modello: randomNumber(1,20),
        alimentazione: 'metano'

    },
    {
        marca: 'Pluto',
        modello: randomNumber(1,20),
        alimentazione: 'benzina'

    },
    {
        marca: 'Paperino',
        modello: randomNumber(1,20),
        alimentazione: 'elettrico'

    },
    {
        marca: 'Topolino',
        modello: randomNumber(1,20),
        alimentazione: 'benzina'

    },
]

// MEtodo A

// Auto a benzina

const benzina = automobili.filter((element) =>{
    console.log(element.alimentazione)

    return element.alimentazione === 'benzina';
})

console.log('Auto a Benzina, ', benzina)

// Auto a Diesel

const diesel = automobili.filter((element) =>{
    console.log(element.alimentazione)

    return element.alimentazione === 'diesel'
})

console.log('Auto a diesel: ', diesel)

// Altra alimentazione

const altro = automobili.filter((element) =>{
    console.log(element.alimentazione)

    return (element.alimentazione !== 'diesel' && element.alimentazione !== 'benzina')
})

console.log('Auto miste: ',altro)



// MEtodo B

const benz = [];
const dis = [];
const other =[];

automobili.forEach((tipo,)=>{
    switch (tipo.alimentazione) {
        case 'benzina':
            benz.push({
                ...tipo
            });
            break;
        case 'diesel':
            dis.push({
                ...tipo
            });
            break;
        default:
            other.push({
                ...tipo
            });
    }


});

console.log('Benzina:',benz)
console.log('Diesel:',dis)
console.log('Other: ', other)




/****************************************************************
 * FUNCTIONS
 ***********************************/

 function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}





