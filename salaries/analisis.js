// Analisis personal de Juanita

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salariosPersona = trabajos.map(trabajo => trabajo.salario);

    const medianaSalarios = PlatziMath.calcularMediana(salariosPersona);

    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const incrementosSalariales = [];

    for (let i = 1; i < trabajos.length; i++) {
        const nextElement = trabajos[i].salario;
        const element = trabajos[i - 1].salario;

        const incremento = nextElement - element;
        const porcentajeIncremento = incremento / element;
        incrementosSalariales.push(porcentajeIncremento);
    }

    const medianaIncrementos = PlatziMath.calcularMediana(incrementosSalariales);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaIncrementos;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}

// Analisis empresarial

const empresas = {}

const personas = salarios.map(salario => salario.trabajos);

personas.forEach((persona) => {
    persona.forEach(trabajo => {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }

        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    });
});

function medianaPorEmpresa(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
        return;
    } else if (!empresas[nombre][year]) {
        console.warn(`La empresa no dio salario en el ${year}`);
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaPorEmpresa(nombre, year);
        });

        let incrementosSalariales = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const nextElement = listaMedianaYears[i];
            const element = listaMedianaYears[i - 1];

            const incremento = nextElement - element;
            const porcentajeIncremento = incremento / element;
            incrementosSalariales.push(porcentajeIncremento);
        }

        const medianaIncrementos = PlatziMath.calcularMediana(incrementosSalariales);

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimaMediana * medianaIncrementos;
        const nuevoMediana = ultimaMediana + aumento;

        return nuevoMediana;
    }
}

// Analisis general

function medianaGeneral () {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    
    const mediana = PlatziMath.calcularMediana(listaMedianas);
    
    return mediana
}

function medianaTop10 () {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const medianasOrdenada = PlatziMath.listaOrdenada(listaMedianas);

    const cantidad = medianasOrdenada.length / 10;
    const limite = medianasOrdenada.length - cantidad;

    // Splice quita los elementos a diferencia de slice que solo usa los elementos
    const top10 = medianasOrdenada.slice(limite, medianasOrdenada.length);

    const medianaTop10 = PlatziMath.calcularMediana(top10);

    return medianaTop10;
}