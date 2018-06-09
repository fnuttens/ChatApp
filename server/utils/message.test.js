const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Florent', text = 'Hey you!';

    const message = generateMessage(from, text);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Florent';
    const lat = 123, lng = 321;
    const url = `https://www.google.com/maps?q=${lat},${lng}`;

    const locationMessage = generateLocationMessage(from, lat, lng);
    expect(typeof locationMessage.createdAt).toBe('number');
    expect(locationMessage).toMatchObject({from, url});
  });
});
