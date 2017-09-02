const expect = require('expect');
var {Users} = require('./users');

describe('Users', () => {
	var users;
	
	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Ben',
			room: 'Pizza'
		}, {
			id: '2',
			name: 'Jo',
			room: 'Chocolate'
		}, {
			id: '3',
			name: 'Al',
			room: 'Pizza'
		}];
	});
	
	it('should add new user', () => {
		var users = new Users();
		var user = {
				id: '123',
				name: 'Karen',
				room: 'Pizza'
		};
		var resUser = users.addUser(user.id, user.name, user.room);
		expect(users.users).toEqual([user]);
	});
	
	it('should remove a user', () => {
		//pass valid id	
		var userId = '1';
		var user = users.removeUser(userId);
		
		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});
	
	it('should not remove user', () => {
		//pass invalid id
		var userId = '89';
		var user = users.removeUser(userId);
		
		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});
	
	it('should find user', () => {
		//pass valid id
		var userId = '2';
		var user = users.getUser(userId);
		expect(user.id).toBe(userId);
	});
	
	it('should not find user', () => {
		//pass invalid id
		var userId = '89';
		var user = users.getUser(userId);
		expect(user).toNotExist();
	});
	
	it('should return names for Pizza', () => {
		var userList = users.getUserList('Pizza');
		expect(userList).toEqual(['Ben', 'Al']);
	});
	
	it('should return names for Chocolate', () => {
		var userList = users.getUserList('Chocolate');
		expect(userList).toEqual(['Jo']);
	});
});