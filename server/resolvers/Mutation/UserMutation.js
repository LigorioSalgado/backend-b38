const Users = require('../../models/Users');



module.exports = {

	createUser:(root,args) => {
		return Users.create(args.data);
	}

};