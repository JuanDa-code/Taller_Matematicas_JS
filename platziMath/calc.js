let nums = [1, 40, 25, 76, 32, 19, 7];

const esPar = (array) => array.length % 2 == 0? true:false;

const calcularPromedio = (arrayNums) => {
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

    return promedio.toFixed(1);
}

const calcularMediana = (arrayNums) => {
    const arrayEsPar = esPar(arrayNums);
    const arrayOrdenado = arrayNums.sort((a, b) => a - b);

    if (arrayEsPar) {
        const indexMitad = Math.round(arrayOrdenado.length / 2);

        const valoresMitad = [];

        valoresMitad.push(arrayOrdenado[indexMitad]);
        valoresMitad.push(arrayOrdenado[indexMitad - 1]);

        return calcularPromedio(valoresMitad);
    } else {
        const indexMitadArrayImpar = Math.round(arrayOrdenado.length / 2);
        
        return arrayOrdenado[indexMitadArrayImpar - 1];
    }
}

function agrupar (titulo, contenido) {
    console.group(titulo);
    console.log(contenido);
    console.groupEnd();
}

agrupar('Funcion Par', esPar(nums));
agrupar('Funcion Calcular Promedio', calcularPromedio(nums));
agrupar('Funcion Calcular Mediana', calcularMediana(nums));