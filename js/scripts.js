

// - Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas.

function exercise (word){

    if (word.length > 5) {
        return word.toUpperCase()
    }

    return word.toLowerCase()
}

console.log(exercise ('esternocleidomastoideo'));


// Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.


function exercise2(word) {
    const random = Math.floor(Math.random() * word.length);
    console.log(word.charAt(random));
}


exercise2 ('crema')


// Crea una función que reciba dos palabras y devuelva cuál de las dos es más larga. Si ambas palabras tienen la misma longitud, deberá indicarlo.

function exercise3 (word1, word2){
    if (word1.length > word2.length){
        console.log (word1)
    }
    else if (word2.length > word1.length){
        console.log(word2)
    }
    else {
        console.log('Son iguales')
    }

}

exercise3 ('barcelona', 'muchacho')

// - Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras aleatorias de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".

function aleatoryLetter (word){
    return word.charAt(Math.random()* word.length)+ word.charAt (Math.random()+word.length)}

function random (word1, word2, word3){
    return (aleatoryLetter(word1) + aleatoryLetter(word2) + aleatoryLetter(word3));

}
console.log(random('abuelo', 'ttaxi','Sorloth'))

// - Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir 
// "El usuario es dorian" y por otro lado "El dominio es gmail.com".

function receiveEmail (email){

    const arroba = email.indexOf('@');
    const user = email.substring(0, arroba);
    const domain = email.substring(arroba +1);

    console.log( `El usuario es  ${user}`);
    console.log( `El dominio es ' ${domain}` );

}

receiveEmail ('merino515@icloud.com')

// - Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs

    function intercalated (lowerWord){
        return lowerWord.charAt(0).toLowerCase() + lowerWord.charAt(1).toUpperCase() + lowerWord.charAt(2).toLowerCase()+ lowerWord.charAt(3).toUpperCase+ lowerWord.charAt(4).toLowerCase;
  
    }
    
intercalated ('casillas');

// /* 7. Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87". */

function userName(nameAndSurname) {
    return nameAndSurname.charAt(0) +
        nameAndSurname.substring((nameAndSurname.indexOf(' ') + 1)) +
        Math.round(Math.random() * 100);
}

const name1 = userName('interpol');
const name2 = userName('Perico');
console.log(name1);
console.log(name2);

// /* 8. Crea una función que reciba 2 verbos en infinitivo. La función debe imprimir a qué conjugaciónpertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".*/

function conjugation(verb) {
    if (verb.substring(verb.length-2) === 'ar') {
        return 'El verbo ' + verb + ' es de la primera conjugación.';
    } else if (verb.substring(verb.length-2) === 'er') {
        return 'El verbo ' + verb + ' es de la segunda conjugación.';
    } 

    return 'El verbo ' + verb + ' no es ni de la primera ni de la segunda conjugación.';
}

const verb1 = conjugation('partir');
console.log(verb1);

// 