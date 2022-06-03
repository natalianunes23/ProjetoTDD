const request=require('supertest');
const app = require('../routes/routesAdmin');
describe ('Teste de Rota',()=> {
    it("it should respond with an ok", async() =>{
        const res=await request('http://localhost:3000').get('/about')
        expect(res.statusCode).toEqual(200)
    })
})