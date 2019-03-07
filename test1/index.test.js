import { Add } from './index';

it('Si recibo cadena vacia = 0', () => {
    expect(Add("")).toBe(0)
})

it('Si recibo una cadena de 1 devuelvo 1', () => {
    expect(Add("1")).toBe(1)
})

it('Si recibo una cadena de 1,2 devuelvo 3', () => {
    expect(Add("1,2")).toBe(3)
})

it('Cadena indefinica de numeros' , () => {
    expect(Add("1,2,3,4,20,22,3333")).toBe(3385)
})

it('Si recibo una cadena con saltos de linea', () => {
    expect(Add("1 \n 2")).toBe(3);
})

it('Si recibo una cadena con saltos de linea y comas', () => {
    expect(Add("1 \n 2,3")).toBe(6);
})
/*
Esto va a dar error
it('Si recibo una cadena con saltos de linea y comas', () => {
    expect(Add("1,\n")).toBe(6);
})
*/

it('Soportar diferentes delimitadores' , () => {
    expect(Add("//;\n1;2")).toBe(3)
})