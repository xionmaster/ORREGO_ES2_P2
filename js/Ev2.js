
function validarFormulario() {
    const input1 = document.getElementById('input1').value.trim();
    const input2 = document.getElementById('input2').value.trim();
    const check1 = document.getElementById('check1').checked;
    const check2 = document.getElementById('check2').checked;
    const select1 = document.getElementById('select1').value;

    if (input1 && input2 && (check1 || check2) && select1) {
        alert('Todos los controles tienen datos ingresados, se realiza la acción');
        // Aquí va la acción principal
    } else {
        alert('Por favor, complete todos los campos y seleccione al menos una opción de check.');
    }
}
 


function verificarFechas() {
    const inicio = document.getElementById('fechaInicio').value;
    const cierre = document.getElementById('fechaCierre').value;
    if (!inicio || !cierre) {
        alert('Debe ingresar ambas fechas.');
        return;
    }
    if (inicio > cierre) {
        alert('La fecha de inicio no puede ser posterior a la fecha de cierre.');
    } else {
        window.open('', '', 'width=400,height=200').document.write(
            `<h1>Fechas válidas</h1>
            <p>Fecha de inicio: ${inicio}</p>
            <p>Fecha de cierre: ${cierre}</p>`
        );
    }
}
   

function modificarEstilos() {
    const caja = document.getElementById('Caja');
    caja.style.backgroundColor = 'rgb(92, 114, 28)';
    caja.style.color = 'rgb(44, 28, 114)';
    caja.style.border = '20px solid rgb(114, 28, 72)';
    caja.style.fontSize = '1.2rem';
    caja.style.backgroundImage = 'url("img/imagen.jpg")';
    caja.style.width = '300px';
    caja.style.height = '200px'; 
}
        
