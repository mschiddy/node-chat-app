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
	findUserNameByRoom(name, room){
		var namesArray = this.users.map((user) => user.name);
		
		if (namesArray.includes(name)){
			return true;
		} else {
			return false;
		}
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