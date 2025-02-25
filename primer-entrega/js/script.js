let ahorroMensual;
let mesesAHorrar;

function solicitarAhorro() {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Introduce tu ahorro mensual';
    document.body.appendChild(input);
    
    const botón = document.createElement('button');
    botón.innerText = 'Enviar';
    document.body.appendChild(botón);

    botón.addEventListener('click', () => {
        ahorroMensual = parseFloat(input.value);
        if (isNaN(ahorroMensual) || ahorroMensual <= 0) {
            alert("Por favor, ingresa un monto válido mayor a cero.");
        } else {
            solicitarMeses();
        }
    });
}

function solicitarMeses() {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Introduce la cantidad de meses';
    document.body.appendChild(input);
    
    const botón = document.createElement('button');
    botón.innerText = 'Enviar';
    document.body.appendChild(botón);

    botón.addEventListener('click', () => {
        mesesAHorrar = parseInt(input.value);
        if (isNaN(mesesAHorrar) || mesesAHorrar <= 0) {
            alert("Por favor, ingresa un número válido de meses.");
        } else {
            procesarAhorro();
        }
    });
}

function procesarAhorro() {
    const totalAhorro = calcularTotalAhorro();
    mostrarResultado(totalAhorro);
    mostrarProgreso(totalAhorro);
    guardarDatos(totalAhorro); 
}

function calcularTotalAhorro() {
    return ahorroMensual * mesesAHorrar;
}

function mostrarResultado(total) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Tu ahorro total al final de ${mesesAHorrar} meses será: $${total.toFixed(2)}`;
}

function mostrarProgreso(total) {
    let mensaje = "Progreso de ahorro:<br>";
    for (let mes = 1; mes <= mesesAHorrar; mes++) {
        let acumulado = ahorroMensual * mes;
        mensaje += `Mes ${mes}: $${acumulado.toFixed(2)}<br>`;
    }
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML += mensaje; 
}

function guardarDatos(total) {
    const datos = {
        ahorroMensual: ahorroMensual,
        mesesAHorrar: mesesAHorrar,
        totalAhorro: total
    };
    localStorage.setItem('datosAhorro', JSON.stringify(datos));
}

// Iniciar el simulador
document.getElementById('iniciar').addEventListener('click', solicitarAhorro);