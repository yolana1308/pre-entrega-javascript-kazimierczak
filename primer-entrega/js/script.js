let ahorroMensual;  
let mesesAHorrar;  


let paraSaberSiFunciona = 13;
console.log(paraSaberSiFunciona)
// Solicitar el ahorro mensual  
function solicitarAhorro() {  
    const input = prompt("¿Cuánto dinero ahorrarás cada mes? (O presiona Cancelar para salir)");  

    // Verificar si el usuario presionó Cancelar  
    if (input === null) {  
        alert("Proceso cancelado por el usuario.");  
        return; // Salir de la función  
    }  

    ahorroMensual = parseFloat(input);  

    // Validar entrada  
    if (isNaN(ahorroMensual) || ahorroMensual <= 0) {  
        alert("Por favor, ingresa un monto válido mayor a cero.");  
        solicitarAhorro(); // Volver a pedir el valor  
    } else {  
        solicitarMeses(); // Si es válido, solicitar la cantidad de meses  
    }  
}  

// Solicitar cantidad de meses  
function solicitarMeses() {  
    const input = prompt("¿Cuántos meses deseas ahorrar? (O presiona Cancelar para salir)");  

    // Verificar si el usuario presionó Cancelar  
    if (input === null) {  
        alert("Proceso cancelado por el usuario.");  
        return; // Salir de la función  
    }  

    mesesAHorrar = parseInt(input);  

    if (isNaN(mesesAHorrar) || mesesAHorrar <= 0) {  
        alert("Por favor, ingresa un número válido de meses.");  
        solicitarMeses(); // Volver a pedir  
    } else {  
        procesarAhorro(); // Proceder al procesamiento  
    }  
}  

// Procesar y mostrar el ahorro  
function procesarAhorro() {  
    const confirmar = confirm(`Vas a ahorrar $${ahorroMensual.toFixed(2)} cada mes durante ${mesesAHorrar} meses. ¿Deseas continuar?`);  

    if (confirmar) {  
        const totalAhorro = calcularTotalAhorro();  
        mostrarResultado(totalAhorro);  
        mostrarProgreso(totalAhorro); // Mostrar el progreso mensual  
        
        continuarCalculando(); // Preguntar si desea continuar calculando  
    } else {  
        alert("Proceso cancelado.");  
    }  
}  

// Calcular el total de ahorro  
function calcularTotalAhorro() {  
    return ahorroMensual * mesesAHorrar;  
}  

// Mostrar el resultado  
function mostrarResultado(total) {  
    alert(`Tu ahorro total al final de ${mesesAHorrar} meses será: $${total.toFixed(2)}`);  
}  

// Mostrar progreso mes a mes  
function mostrarProgreso(total) {  
    let mensaje = "Progreso de ahorro:\n";  
    for (let mes = 1; mes <= mesesAHorrar; mes++) {  
        let acumulado = ahorroMensual * mes;  
        mensaje += `Mes ${mes}: $${acumulado.toFixed(2)}\n`;  
    }  
    alert(mensaje);  
}  

// Preguntar si desea continuar calculando  
function continuarCalculando() {  
    const otraVez = confirm("¿Deseas realizar otro cálculo de ahorro?");  
    if (otraVez) {  
        solicitarAhorro(); // Reiniciar el proceso  
    } else {  
        alert("Gracias por usar el simulador de ahorro. ¡Hasta la próxima!");  
    }  
}  

// Iniciar el simulador  
document.getElementById('iniciar').addEventListener('click', solicitarAhorro);  