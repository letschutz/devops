const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('Testes Unitários da Interface - Sistema de Entrada Parcelada', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    test('1. O título da página deve ser "Sistema de Entrada Parcelada"', () => {
        expect(document.title).toBe('Sistema de Entrada Parcelada');
    });

    test('2. Deve existir um cabeçalho H1 com o texto correto', () => {
        const h1 = document.querySelector('h1');
        expect(h1.textContent).toBe('Gestão de Entrada Parcelada');
    });

    test('3. O ficheiro de estilo style.css deve estar vinculado corretamente', () => {
        const link = document.querySelector('link[rel="stylesheet"]');
        expect(link.getAttribute('href')).toBe('style.css');
    });

    test('4. Deve existir uma secção com a classe "card"', () => {
        const card = document.querySelector('.card');
        expect(card).not.toBeNull();
    });

    test('5. O card deve conter a mensagem de status do sistema', () => {
        const statusText = document.querySelector('.card p').textContent;
        expect(statusText).toContain('Aguardando novo deploy');
    });
});
