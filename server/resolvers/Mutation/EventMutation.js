const Events = require('../../models/Events');
const storage = require('../../utils/storage');


module.exports = {

	createEvent:async(root,args,context) =>{
		args.data.created_by = context.user._id;
		if(args.data.banner){
			//args.data.photos.foreach(photo => {})
			const { createReadStream } = await args.data.banner;
			const stream = createReadStream();
			const image = await storage({ stream });
			args.data =  {...args.data,banner:image.url};
		}
		return Events.create(args.data);
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