var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = "Mel";
		var text = "Test message";
		var message = generateMessage(from, text);
		
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location message object', () => {
		var from = "Mel";
		var latitude = 2;
		var longitude = 2;
		var url = "https://www.google.com/maps?q=2,2"
		var message = generateLocationMessage(from, latitude, longitude);
		
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, url});
	});
});