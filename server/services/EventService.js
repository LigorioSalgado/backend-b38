const Events = require('../models/Events');


module.exports = {

	allEvents: (query) => {
		return Events.find(query).populate('created_by').exec();
	}

};