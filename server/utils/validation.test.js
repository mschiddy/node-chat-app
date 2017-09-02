var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-String values', () => {
		var res = isRealString(289);
		expect(res).toBe(false);
	});

	it('should reject String with only spaces', () => {
		var res = isRealString('    ');
		expect(res).toBe(false);
	});
	
	it('should allow string with non-space characters', () => {
		var res = isRealString("  miw00j3/v  ");
		expect(res).toBe(true);
	});
});
