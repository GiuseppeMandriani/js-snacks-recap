console.log('ok')

/**
 * SNACK 1
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']


**/

console.log('*********** Snack 1 **************')


const arrayMisto = ['prova', 'POLLO', 'Cane', 'sole','mACCHINA'];

const arrayFormattato = arrayMisto.map((element) =>{

    let variabile = element.toLowerCase()
    return variabile.charAt(0).toUpperCase() + variabile.slice(1);
})

console.log(arrayFormattato)











/**
 * 
 * SNACK 2
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
un array di tab aperte
un numero che indica l'indice della tab aperta nell'array:
{
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
}
Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva.
 * 
 * 
 * 
 */

console.log('*********** Snack 2 ****************')


const windows =
    {
        tabAperte: ['Facebook', 'Instangram', 'Gmail', 'GitHub'],
        tabAttive: 0,
    };

    //  if (windows.tabAperte.includes('Facebook',[0])){
    //      console.log('contenuto')
    //  }

     for (let key in windows){
        console.log(`${key}: ${windows[key]}`);
    };

    searchTab('Facebook');


/**
 * 
 * @param {*string} social // stringa da cercare nell'array
 */
function searchTab(social){
    if (windows.tabAperte.includes(social)){
        console.log('contiene')
        windows.tabAttive += 1;
        console.log(windows.tabAttive)
    } else{
        console.log('non contiene')
    }
}
    





/**
 * 
 * SNACK 3  -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
 * 
 * 
 * 
 */


console.log('*********** Snack 3 ***********')


const arrayFormattato2 = arrayMisto.map((element, i) =>{
    return capitalize(element)
})
console.log(arrayFormattato2)


function capitalize(word) {

    let parola = word.toLowerCase()
    return parola.charAt(0).toUpperCase() + parola.slice(1);
}




/**
 * 
 * SNACK 4 -> VUE 
Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
Andiamo a stampare nome cognome e numero dentro una lista.
Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso mentre gli altri normalmente di nero. Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero
 * 
 * 
 */










