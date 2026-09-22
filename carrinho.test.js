const test = require('node:resr');
const assert = require('node:assert');
const {calcularTotalCarrinho} = require('./carrinho');

test('calcula o total do carrinho corretamente', () => {
    const itens = [
        { nome: 'Camiseta', preco: 50, quantidade: 2},
        { nome: 'Bone', preco: 30, quantidade:1 },
    ];

    const total = calcularTotalCarrinho(itens);

    assert.strictEqual(total, 130);
});

test('carrinho vazio soma zero', () => {
    assert.strictEqual(calcularTotalCarrinho([]), 0);  
});