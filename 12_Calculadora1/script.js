function calculadora() {
    var numero1 = document.getElementById('n1').value;
    var numero2 = document.getElementById('n2').value;
    var ops = document.getElementById('op').value;

    // var resultado = parseFloat(numero1) + parseFloat(numero2);
    // document.getElementById('disp').innerHTML = resultado;
    var resultado;
    switch (ops) {
        case 'suma':
            var resultado = parseFloat(numero1) + parseFloat(numero2);
            break;
        case 'resta':
            var resultado = parseFloat(numero1) - parseFloat(numero2);
            break;
        case 'division':
            var resultado = parseFloat(numero1) / parseFloat(numero2);
            break;
        case 'producto':
            var resultado = parseFloat(numero1) * parseFloat(numero2);
            break;

        default:

            break;
    }
    document.getElementById('disp').innerHTML = resultado;
}