/**
 * Snack 1
A:
Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
- Codice giocatore
Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- l'età deve essere compresa tra 18 e 40
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali (array di lettere) e 3 cifre casuali
Stampare poi Codice giocatore, Media punti e percentuale tiri da 3 punti.
 * 
 */


const player = {
    eta: randomNumber(18,40),
    mediaPunti:randomNumber(0,50),
    percentualeSuccesso:randomNumber(0,100),
    codicePlayer:genPlayerCode(),
}

console.log('*************** Snack 1 Parte A  *************')

console.log(player)


/**
 * B:
Creare un array di 10 giocatori di basket, con le regole sopra indicate
Dopo aver creato l'array, stampa codice giocatore e media punti per ogni giocatore.
 */

console.log('**************** Snack 1 Parte B ************')

const players = []

for (let i = 0; i < 10; i++){
    players.push({
        eta: randomNumber(18,40),
        mediaPunti:randomNumber(0,50),
        percentualeSuccesso:randomNumber(0,100),
        codicePlayer:genPlayerCode(),
    })
}


const newPlayers = players.forEach((element,index)=>{
    // console.log(element.codicePlayer)
    // console.log(element.mediaPunti)

    console.log(`Codice giocatore ${index + 1}: ${element.codicePlayer}, Media Punti: ${element.mediaPunti}`)
})


/**
 * 
 * C:
Creare un nuovo array con i giocatori che hanno una media di punti superiore a 25 e
la percentuale di successo per i tiri da 3 punti superiore all’50%.
 */


const bePlay = players.filter((element,index) =>{
    return element.mediaPunti > 25 && element.percentualeSuccesso > 50
    
});

console.log('************** Snack 1 Parte C ************************')

console.table(bePlay)


/**
 * Snack 2
 * 
 * A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
    
    Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
    
* B elevare al quadrato quelli in posizione pari


 */

console.log('**************** Snack 2 parte A & B ************')

const numbers =[1, 2, 3, 4, 5]
console.log('Primo Array',numbers)



const numbersDouble = numbers.map((element,index) =>{
    return element*element
})

console.log('Array con valori elevati al quadrato:', numbersDouble)


// B elevare al quadrato quelli in posizione pari

const pari = numbers.map((element,index) =>{
     if (numbers[index] % 2 === 0){
           return element*element
     }return element
})

console.log('Array di elementi elevati al quadrato in posizione pari:', pari)





/****************
 * FUNCTIONS
 ****************/


// Function per numero random in range

 function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Function per 3 lettere random
 function genPlayerCode(){
    const letterePlayer = ['A','B','C','D','E','F','G'];

    let chars = '';
    let numbers = '';
    
    for (let i = 1; i <= 3; i++){
        chars += letterePlayer[randomNumber(0, letterePlayer.length -1)]

        numbers += randomNumber(0,9)
    }

    const mix = chars + numbers

    return mix;


    
}

    
    

    


