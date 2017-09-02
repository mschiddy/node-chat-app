[{
	id: "ko8no", 
	name: "Karen",
	room: "Pizza"
}]

class Users {
	constructor() {
		this.users = [];
	}
	addUser(id, name, room){
		var user = {id, name, room};
		this.users.push(user);
		return(user);
	}
	removeUser(id){
		var user = this.getUser(id);
		
		if (user) {
			this.users = this.users.filter((user) => user.id !== id);
		}
		return user;
	}
	getUser(id){
		return this.users.filter((user) => user.id === id)[0];
	}
	getUserList(room){
		var users = this.users.filter((user) => user.room === room);
		var namesArray = users.map((user) => user.name);
		
		return namesArray;
	}
}

module.exports = {Users};

//class Person {
//	constructor (name, room) {
//		this.name = name;
//		this.room = room;
//	}
//	getUserDescription(){
//		return `${this.name} is in ${this.room}`;
//	}
//}
//
//var me = new Person('Karen', 'Chocolate');
//console.log('this.name: ', me.name, 'this.room:', me.room);