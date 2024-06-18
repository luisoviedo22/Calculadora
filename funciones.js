function agregarNumero(valor){
    let input = document.getElementById('resultado');
    input.value += valor
}

document.getElementById('cero').addEventListener('click', function() {agregarNumero('0');})
document.getElementById('uno').addEventListener('click', function() {agregarNumero('1');})
document.getElementById('dos').addEventListener('click', function() {agregarNumero('2');})
document.getElementById('tres').addEventListener('click', function() {agregarNumero('3');})
document.getElementById('cuatro').addEventListener('click', function() {agregarNumero('4');})
document.getElementById('cinco').addEventListener('click', function() {agregarNumero('5');})
document.getElementById('seis').addEventListener('click', function() {agregarNumero('6');})
document.getElementById('siete').addEventListener('click', function() {agregarNumero('7');})
document.getElementById('ocho').addEventListener('click', function() {agregarNumero('8');})
document.getElementById('nueve').addEventListener('click', function() {agregarNumero('9');})

function operacion(signo){
    let input = document.getElementById('resultado');
    input.value += signo
}

document.getElementById('suma').addEventListener('click', function() {operacion(' + ');})
document.getElementById('resta').addEventListener('click', function() {operacion(' - ');})
document.getElementById('dividir').addEventListener('click', function() {operacion(' ÷ ');})
document.getElementById('multiplicar').addEventListener('click', function() {operacion(' x ');})

function borrarTodo(){
    let input = document.getElementById('resultado');
    input.value = '';
}

document.getElementById('borrarTodo').addEventListener('click', function() {borrarTodo('');})

function borrarUno() {
    let input = document.getElementById('resultado');
    input.value = input.value.substring(0, (input.value.length - 1));
}

document.getElementById('borrarUno').addEventListener('click', function() {borrarUno('');})

function porcentaje(valor){
    let input = document.getElementById('resultado');
    input.value += "%"
}

document.getElementById('porcentaje').addEventListener('click', function() {porcentaje('%');})

function punto(valor){
    let input = document.getElementById('resultado');
    input.value += "."
}

document.getElementById('punto').addEventListener('click', function() {punto('.');})

function igual() {
    let input = document.getElementById('resultado');
    try {
        let valor = input.value;
        valor = valor.replace(/x/g, '*').replace(/÷/g, '/');
        valor = valor.replace(/(\d+)%/g, function(match, p1) {
            return parseFloat(p1) / 100 * parseFloat(valor);
        });
        let resultado = eval(valor);
        input.value = resultado;
    } catch (e) {
        alert.error(e);
        input.value = 'Error en la expresión';
    }
}

document.getElementById('igual').addEventListener('click', function() {igual('');})

