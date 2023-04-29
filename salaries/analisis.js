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

function reestructurarInformacion(salarios) {
    const empresas = {}

    const trabajos = salarios.map(salario => salario.trabajos);

    trabajos.forEach((trabajo) => {
        trabajo.forEach(elemento => {
            if (elemento.empresa) {
                empresas[elemento.empresa] += 1;
            } else {
                empresas[elemento.empresa] = 1;
            }
        });
        
        console.log(empresas);
    });

    console.log({empresas});
}