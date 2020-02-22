const UserQueries = require('./UserQuery');
const EventQueries = require('./EventQuery');

module.exports = {
	...UserQueries,
	...EventQueries
};

/* 
    UsQueries:{
        getUsers:() => {}
        getUser:() => {}
    }





*/
