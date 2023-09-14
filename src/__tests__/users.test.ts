import app from "../server";

describe('Test /users route', () => {
  test('should return 200 OK status', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/users',
    });
    expect(response.statusCode).toBe(200);
  });
  // Adicione mais testes conforme necessário
});