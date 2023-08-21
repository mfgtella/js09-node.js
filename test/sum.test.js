/*
 
 Las pruebas unitarias permite verificar
 que los componentes individuales de un programa
 funcionen correctamente

ventajas:
1. deteccion de errores.
2. mejora en la calidad del programa
3. facilita la refactorizacion.
4. ahorro de tiempo a largo plazo.
5. facilita la colaboracion.

desventajas:
1. tiempo y esfuerzo
2.cobertura insuficiente 
3. complejidad adicional
4. falsa confianza
*/

// importar el archivo a probar
const { sum } = require("../assets/js/sum");

// test("Prueba de 1 + 3 = 4", () => {} );
test("Prueba de 1 + 3 = 4", () => {
    expect( sum(1,3)  ).toBe(4);
} );