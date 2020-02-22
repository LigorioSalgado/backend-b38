const Events = require('../../models/Events');


module.exports = {

	getEvents:(root,args) => {
		if(args.is_active || args.date) return Events.find({args}).exec();
		if(args.city) return Events.find({'address.city':args.city}).exec();
		if(args.tag) return Events.find({tags:{$in:[args.tag]}}).exec(); 
        
		return Events.find().exec();
		/*Events.find({'address.city':args.city},{tags:{$in:[args.tag]}},{date:args.date}).exec(); */
	},
	getEvent: (root,args) => {
		return Events.findOne({_id:args.id}).exec();
	}


};