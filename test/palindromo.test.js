const {palindromo} = require("../assets/js/palindromo")

test("Palíndromo de 3 letras", () => {
    expect( palindromo( "ana" )  ).toBe(true);
    expect( palindromo( "ala" )  ).toBeTruthy();
    expect( palindromo( "oso" )  ).toBeTruthy();
    expect( palindromo( "Bob" )  ).toBeTruthy();
    expect( palindromo( "Somos o no somos" )  ).toBeTruthy();
} );

test("No palíndromos de 3 letras", () => {
    expect( palindromo( "ola" )  ).toBe(false);
    expect( palindromo( "amo" )  ).toBeFalsy();
    expect( palindromo( "leo" )  ).toBeFalsy();
} );