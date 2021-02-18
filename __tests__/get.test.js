const { app } = require('../app.js');
const { skateboards } = require('../data.js');
const supertest = require('supertest');
const request = supertest(app);


it('should respond with all skateboards', async(done) => {
    const expectation = {skateboards};
    const response = await request.get('/skateboards');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectation);
    done();
})


it('should respond with 1 skateboard based on its id', async(done) => {
    const expectation = {
        "selectedSakteboards": {
          "id": 1,
          "name": "Bennett Emotional Baggage Deck",
          "image": "../assets/bennett-deck.webp",
          "description": "Size: 8.125\" Wheelbase: 14\"",
          "category": "skateboard",
          "price": 55
        }
      };

    const response = await request.get('/skateboards/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectation);
    done();
})