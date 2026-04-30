const { sum, subtract, multiply, divide }  = require("../src");

describe("Calculadora", () => {
    test("Deve somar números positivos", () => {
        expect(sum(2, 3)).toBe(5);
    });

    test("Deve somar números negativos", () => {
        expect(sum(-2, -3)).toBe(-5);
    });

    test("Deve subtrair números positivos", () => {
        expect(subtract(5, 4)).toBe(1);
    });

    test("Deve subtrair números negativos", () => {
        expect(subtract(-2, -3)).toBe(1);
    });

    test("Deve dividir corretamente", () => {
        expect(divide(4, 2)).toBe(2);
    });

    test("Deve retornar erro quando dividir por 0", () => {
        expect(() => divide(10, 0)).toThrow("Dividing by 0");
    });
})