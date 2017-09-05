var users = [{
	id: 01,
	name: "Bob", 
	room: "yo"
}, {
	id: 01,
	name: "Jane", 
	room: "yo"
}, {
	id: 01,
	name: "Jim", 
	room: "re"
}];

var user = "Jane";

var rooms = users.map(matchingRoom => matchingRoom.room);
var names = users.map(matchingUser => matchingUser.name);
//var found = users.find((name) => "Bob" === (users[0].name));
	
	console.log(names);
	console.log(rooms);
//if (rooms.includes('yo')){
//	console.log(true);
//};
//if (names.includes('Jane')){
//	console.log(true);
//};

if (rooms.includes('yo') && names.includes(user)){
	console.log(true);
};
