import  app  from "../src/app";
import request from 'supertest'

describe('CONTROLLER TEST', ()=>{
    describe('GET /PayerTypes', () => {
        test('should fail if not found', async () =>{
            const response = await request(app).get('/payerTypes/-1');
            expect(response.status).toBe(404);
        })
    })
    describe('DELETE /PayerTypes', () => {
        test('should fail if not found', async () =>{
            const response = await request(app).delete('/payerTypes/-1');
            expect(response.status).toBe(404);
        })
    })
})