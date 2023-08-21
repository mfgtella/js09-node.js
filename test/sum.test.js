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
2. cobertura insuficiente 
3. complejidad adicional
4. falsa confianza
*/

// importar el archivo a probar
const { sum } = require("../assets/js/sum");

// test("Prueba de 1 + 3 = 4", () => {} );
test("Prueba de 1 + 3 = 4", () => {
    expect( sum(1,3)  ).toBe(4);
} );
test("Prueba de 1000 + 3000 = 4000", () => {
    expect( sum( 1000, 3000)  ).toBe(4000);
} );

test("Prueba de 1000 + -3000 = -2000", () => {
    expect( sum( 1000, -3000)  ).toBe(-2000);
} );

test("Prueba de 1000 + NaN = NaN", () => {
    expect( sum( 1000, NaN )  ).toBe(NaN);
} );

test("Prueba de números decimales", () => {
    // Los numeros flotantes tiene problema con la precisión en cálculos
    // donde la exactitud decimal es crítica.
    expect( sum( 2.51, 0.01 )  ).toBe(2.52); // 2.5199999999999996
    expect( sum( 0.01, 0.20 )  ).toBe(0.21); 
    expect( sum( 0.0001, 0.0002 )  ).toBe(0.0003); //0.00030000000000000003
} );

test("Sumatoria decimales sin importar la precisión", () => {    
    expect( suma2( 2.51, 0.01 )  ).toBeCloseTo(2.52); 
    expect( suma2( 0.01, 0.20 )  ).toBeCloseTo(0.21); 
    expect( suma2( 0.0001, 0.0002 )  ).toBeCloseTo(0.0003); 
} );