const sum = require('../sum');
describe('Testes de soma',() =>{
    beforeAll(()=>{
        console.log('questões para serem feitas ants do teste')
    })
    beforeEach(()=>{
        console.log('Em cada teste')
    })
    /**afterAll e afterEach */
    it('Soma de dois numeros', (done)=> {
    expect(sum(1,2)).toBe(3);
    done();
    })
    it ('soma de dois numeros String e numero',(done) => {
        expect(sum("texto", 2)).toBe(undefined);
        done();
    })
})

