const Events = require('../../models/Events');
const { createNewEvent } = require('../../services/EventService');

module.exports = {

	createEvent:(root,args,context) =>{
		args.data.created_by = context.user._id;
		return createNewEvent(args.data);
	},
	updateEvent:(root, args) =>{
		let updateEvent = {};
		Object.keys(args.data).forEach( key => {
			if(key == 'address'){
				Object.keys(args.data[key]).forEach(addressKey => {
					updateEvent = {
						...updateEvent,
						[`${key}.${addressKey}`]: args.data[key][addressKey]
					};
				});
			}else{
				updateEvent = {...updateEvent,[key]:args.data[key]};
			}

		}); 
		console.log(updateEvent);
		return Events.findByIdAndUpdate(args.id,{$set:updateEvent},{new:true}).exec();
	},
	deleteEvent:(root,args) =>{
		return Events.findByIdAndUpdate(args.id,{$set:{is_active:false}},{new:true}).exec();
	}


};