const Events = require('../../models/Events');
const { allEvents } = require('../../services/EventService');

module.exports = {

	getEvents:(root,args) => {
		if(args.is_active || args.date) return allEvents({args});
		if(args.city) return allEvents({'address.city':args.city});
		if(args.tag) return allEvents({tags:{$in:[args.tag]}});
        
		return allEvents({});
		/*Events.find({'address.city':args.city},{tags:{$in:[args.tag]}},{date:args.date}).exec(); */
	},
	getEvent: (root,args) => {
		return Events.findOne({_id:args.id}).populate('created_by').exec();
	}


};