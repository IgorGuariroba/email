import request from 'supertest';
import app from "../server";

describe('Test /users route', () => {
  test('should return 200 OK status', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });
  // Adicione mais testes conforme necessário
});