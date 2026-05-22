// =============================================
//   SIMULADORES INTERACTIVOS - script.js

// =============================================


// =============================================
//   EJERCICIO 1: LEY DE ENFRIAMIENTO DE NEWTON
//   Fórmula: T = Ts + (T0 - Ts) * e^(-k * t)
// =============================================

function calcularCalor() {

    // 1. Captura de datos desde el formulario
    var T0 = parseFloat(document.getElementById("T0").value);
    var Ts = parseFloat(document.getElementById("Ts").value);
    var k  = parseFloat(document.getElementById("k").value);
    var t  = parseFloat(document.getElementById("t").value);

    var contenedor = document.getElementById("resultado-calor");

    // 2. Validación: verificar que no haya campos vacíos o inválidos
    if (isNaN(T0) || isNaN(Ts) || isNaN(k) || isNaN(t)) {
        contenedor.innerHTML = '<div class="result-error">⚠️ Por favor, completa todos los campos con valores numéricos.</div>';
        return;
    }

    if (k <= 0) {
        contenedor.innerHTML = '<div class="result-error">⚠️ La constante k debe ser mayor a 0.</div>';
        return;
    }

    if (t < 0) {
        contenedor.innerHTML = '<div class="result-error">⚠️ El tiempo no puede ser negativo.</div>';
        return;
    }

    // 3. Procesamiento: aplicar la fórmula con Math.exp() y Math.round()
    var T = Ts + (T0 - Ts) * Math.exp(-k * t);
    var resultado = Math.round(T);

    // 4. Mostrar el resultado en pantalla
    contenedor.innerHTML =
        '<div class="result-content">' +
            '<div class="result-label">Temperatura final calculada</div>' +
            '<div class="result-value">' + resultado + '°</div>' +
            '<div class="result-unit">Celsius — después de ' + t + ' hora(s)</div>' +
        '</div>';
}


// =============================================
//   EJERCICIO 2: COMBINACIONES C(n, r)
//   Fórmula: C(n, r) = n! / (r! * (n - r)!)
// =============================================

// Función propia para calcular el factorial de forma iterativa
function factorial(numero) {
    // El factorial de 0 y 1 es 1
    if (numero === 0 || numero === 1) {
        return 1;
    }

    var resultado = 1;

    // Multiplicamos desde 2 hasta el número
    for (var i = 2; i <= numero; i++) {
        resultado = resultado * i;
    }

    return resultado;
}

// Función para calcular una combinación C(n, r)
function combinacion(n, r) {
    // Si r es mayor que n, no existe combinación posible
    if (r > n) {
        return null;
    }

    // Aplicar la fórmula: n! / (r! * (n - r)!)
    var numerador   = factorial(n);
    var denominador = factorial(r) * factorial(n - r);

    return numerador / denominador;
}

// Función principal del botón
function calcularCombinaciones() {

    // 1. Captura de datos del formulario
    var n1 = parseInt(document.getElementById("n1").value);
    var r1 = parseInt(document.getElementById("r1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var r2 = parseInt(document.getElementById("r2").value);

    var contenedor = document.getElementById("resultado-comb");

    // 2. Validación: campos vacíos o no numéricos
    if (isNaN(n1) || isNaN(r1) || isNaN(n2) || isNaN(r2)) {
        contenedor.innerHTML = '<div class="result-error">⚠️ Por favor, completa todos los campos con valores numéricos.</div>';
        return;
    }

    // 3. Validación: r no puede ser mayor que n
    if (r1 > n1) {
        contenedor.innerHTML = '<div class="result-error">⚠️ En el Grupo 1, r1 (' + r1 + ') no puede ser mayor que n1 (' + n1 + ').</div>';
        return;
    }

    if (r2 > n2) {
        contenedor.innerHTML = '<div class="result-error">⚠️ En el Grupo 2, r2 (' + r2 + ') no puede ser mayor que n2 (' + n2 + ').</div>';
        return;
    }

    // 4. Calcular ambas combinaciones
    var comb1 = combinacion(n1, r1);
    var comb2 = combinacion(n2, r2);

    // 5. Producto total de ambos grupos
    var total = comb1 * comb2;

    // 6. Formatear el número con separadores de miles para mejor legibilidad
    var totalFormateado = total.toLocaleString("es-BO");

    // 7. Mostrar el resultado en pantalla
    contenedor.innerHTML =
        '<div class="result-content result-green">' +
            '<div class="result-label">Total de combinaciones posibles</div>' +
            '<div class="result-value">' + totalFormateado + '</div>' +
            '<div class="result-unit">' +
                'C(' + n1 + ', ' + r1 + ') = ' + comb1.toLocaleString("es-BO") +
                ' &nbsp;×&nbsp; ' +
                'C(' + n2 + ', ' + r2 + ') = ' + comb2.toLocaleString("es-BO") +
            '</div>' +
        '</div>';
}