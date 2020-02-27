const Services = jest.genMockFromModule('../../services/EventService.js');


function allEvents(){

	const data = [
		{
			'_id':'5e509aed78831c488544c3c7',
			'assitants':[],
			'tags':['JS','Chido','memes'],
			'is_active':true,
			'title':'Evento de prueba',
			'description':'Este es un evento de pruebas bien chido',
			'date':'1585958400000',
			'address':{'street':'Av. Alavaro obregon','city':'CDMX','number':'168','country':'Mexico','zip':'06700'},
			'created_by':'5e4f48438bbd7a829da23cc0',
			'createdAt':'1582340845234',
			'updatedAt':'1582340845234'        
		},
		{
			'_id':'5e509aed78831c488544c3c7',
			'assitants':[],
			'tags':['JS','Chido','memes'],
			'is_active':true,
			'title':'Evento de prueba',
			'description':'Este es un evento de pruebas bien chido',
			'date':'1585958400000',
			'address':{'street':'Av. Alavaro obregon','city':'CDMX','number':'168','country':'Mexico','zip':'06700'},
			'created_by':'5e4f48438bbd7a829da23cc0',
			'createdAt':'1582340845234',
			'updatedAt':'1582340845234'        
		},
		{
			'_id':'5e509aed78831c488544c3c7',
			'assitants':[],
			'tags':['JS','Chido','memes'],
			'is_active':true,
			'title':'Evento de prueba',
			'description':'Este es un evento de pruebas bien chido',
			'date':'1585958400000',
			'address':{'street':'Av. Alavaro obregon','city':'CDMX','number':'168','country':'Mexico','zip':'06700'},
			'created_by':'5e4f48438bbd7a829da23cc0',
			'createdAt':'1582340845234',
			'updatedAt':'1582340845234'        
		}
        

	];

	return data;
}

function createNewEvent(data){
	if(data.title){
		return {
			'_id':'5e509aed78831c488544c3c7',
			'assitants':[],
			'tags':['JS','Chido','memes'],
			'is_active':true,
			'title':'Evento de prueba',
			'description':'Este es un evento de pruebas bien chido',
			'date':'1585958400000',
			'address':{'street':'Av. Alavaro obregon','city':'CDMX','number':'168','country':'Mexico','zip':'06700'},
			'created_by':'5e4f48438bbd7a829da23cc0',
			'createdAt':'1582340845234',
			'updatedAt':'1582340845234'        
		};
	}else{
		throw new Error('ValidationError');
	}
}

Services.allEvents = allEvents;
Services.createNewEvent = createNewEvent;


module.exports = Services;