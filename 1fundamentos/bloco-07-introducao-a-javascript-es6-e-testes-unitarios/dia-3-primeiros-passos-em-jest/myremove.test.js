const myRemove = require('./myremove.js');
//A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
describe('Testa a função myRemove', () => {
    it('Deve retornar um array removendo o item correto', () => {
        //Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        //Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        //Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});