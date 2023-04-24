console.group('Cuadrado');

/* Cuadrado */

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado ** 2,
    };
}

console.groupEnd('Cuadrado');

console.group('Triangulo');

/* Triangulo */

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
}

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn('Este no es un triangulo isosceles');
    } else {
        return Math.sqrt( (lado1 ** 2) - ((base ** 2) / 4) );
    }
}

function calcularAlturaTrianguloEscaleno(lado1, lado2, lado3) {
    if (lado1 == lado3 || lado2 == lado3 || lado1 == lado2) {
        console.warn('Este no es un triangulo escaleno');
    } else {
        let s = (lado1 + lado2 + lado3) / 2;
        let lados = [ lado1, lado2, lado3 ];
        let alturas = [];
        lados.forEach(lado => {
            h = (2 / lado) * Math.sqrt( s * (s - lado1) * (s - lado2) * (s - lado3));
            alturas.push(h);
        });
        
        let i = 1;

        return alturas.forEach(altura => {
            console.log(`Altura ${i}: ${altura}`);
            i++;
        });
    }
}

console.groupEnd('Triangulo');

/* Circulo */

console.group('Circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
});

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    }
}

console.groupEnd('Circulo');