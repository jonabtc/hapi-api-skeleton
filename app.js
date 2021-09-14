const Hapi = require('hapi');
const routes = require("./routes");

const server = Hapi.Server({port:3000, host:'localhost', app:{}});

const initServer = async () =>{
    try{
        await server.register(routes);
        await server.start();
        console.log(`Server running on: ${server.info.uri}`);
    }catch (error){
        console.log('Error trying to launch the Hapi server')
    }
}

initServer();