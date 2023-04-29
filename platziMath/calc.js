const PlatziMath = {};

let nums = [1, 40, 25, 76, 32, 19, 7, 1, 40, 1, 25, 25, 25, 25];

PlatziMath.esPar = function (array) {
    return array.length % 2 == 0? true:false;
}

PlatziMath.calcularPromedio = function (arrayNums) {
    // Metodo propio
    // let sumNumbers = 0;

    // arrayNums.forEach(number => {
    //     sumNumbers += number;
    // });

    // let promedio = sumNumbers / arrayNums.length;

    // return console.log(`El promedio de ${arrayNums} es de: ${promedio.toFixed(2)}`);

    // Metodo reduce
    const sumaArray = arrayNums.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);

    let promedio = sumaArray / arrayNums.length;

    return promedio;
}

PlatziMath.calcularMediana = function (arrayNums) {
    const arrayEsPar = PlatziMath.esPar(arrayNums);
    const arrayOrdenado = PlatziMath.listaOrdenada(arrayNums);

    if (arrayEsPar) {
        const indexMitad = Math.round(arrayOrdenado.length / 2);

        const valoresMitad = [];

        valoresMitad.push(arrayOrdenado[indexMitad]);
        valoresMitad.push(arrayOrdenado[indexMitad - 1]);

        return PlatziMath.calcularPromedio(valoresMitad);
    } else {
        const indexMitadArrayImpar = Math.round(arrayOrdenado.length / 2);
        
        return arrayOrdenado[indexMitadArrayImpar - 1];
    }
}

PlatziMath.agrupar = function (titulo, contenido) {
    console.group(titulo);
    console.log(contenido);
    console.groupEnd();
}

PlatziMath.listaOrdenada = function (listaDesordenada) {
    const lista = listaDesordenada.sort((a, b) => a - b);

    return lista;
}

PlatziMath.listaOrdenadaBidimensional = function (listaDesordenadaBi, i) {
    const lista = listaDesordenadaBi.sort((a, b) => a[i] - b[i]);

    return lista;
}

PlatziMath.calcularModa = function (array) {
    const listaObject = {};

    array.forEach(element => {
        if (listaObject[element]) {
            listaObject[element] += 1;
        } else {
            listaObject[element] = 1;
        }
    });

    const listaArray = Object.entries(listaObject);
    const listaArrayOrdenada = listaOrdenadaBidimensional(listaArray, 1);
    const listaLastElement = listaArrayOrdenada[listaArrayOrdenada.length - 1];
    const listaLastElement2 = listaArrayOrdenada[listaArrayOrdenada.length - 2];
    let moda;

    if (listaLastElement[1] === listaLastElement2[1]) {
        moda = 'No hay moda en este array';
    } else {
        moda = listaLastElement[0];
    }

    return moda;
};