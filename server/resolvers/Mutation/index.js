const UserMutations =  require('./UserMutation');
const EventMutations = require('./EventMutation');

module.exports = {
	...UserMutations,
	...EventMutations
};