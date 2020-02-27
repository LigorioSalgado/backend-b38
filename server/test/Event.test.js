jest.mock('../services/EventService.js', () => jest.requireActual('../services/__mocks__/EventService.js'));

const { createTestClient } = require('apollo-server-testing');
const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server');
const {importSchema} = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('../resolvers');
const AuthDirective = require('../resolvers/Directives/AuthDirective');

const GET_EVENTS = gql`
    query{
        getEvents{
            _id
            title
            description
        }
    }

`;

async function createServer (){
	const typeDefs = await importSchema('./server/schema.graphql');
	const schema = makeExecutableSchema({
		typeDefs, 
		resolvers,
		schemaDirectives:{
			auth:AuthDirective
		},
	});
	const server = new ApolloServer({ 
		schema
	});

	return server;
}


test('Get Events', async() => {
   
	const test_server  = await createServer();

	const { query } =  createTestClient(test_server);

	const res = await query({mutation:GET_EVENTS});

	expect(res).toMatchSnapshot();
	expect(res.data.getEvents[0].title).toBe('Evento de prueba');

});




