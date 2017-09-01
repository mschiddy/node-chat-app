var moment = require('moment');
// Jan 1, 1970 00:00:00 am --integers are stored in ms

//var date = new Date();
//console.log(date.getMonth());
//var date = moment();
//date.add(4, 'years').subtract(9, 'months');
//console.log(date.format('MMM Do YYYY'));

var createdAt = 1234;
var date = moment(createdAt);
//date.subtract(2, 'hours').subtract(6, 'minutes');
console.log(date.format('h:mm:ss a'));

