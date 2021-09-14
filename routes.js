module.exports = {
    name: 'ApiRoutes',
    register: async (server, options) => {
        server.route([
            {
                method:'GET',
                path:'/',
                handler: async (req, res) => {
                    return 'Hola noders!';
                }
            },
            {
                method: 'GET',
                path: '/users/{name?}',
                handler: async(req, res)=>{
                    const name = (req.params.name) ? req.params.name : 'invitado';
                    return `hola ${name}!`;
                }
            },
            {
                method:'POST',
                path:'/users',
                handler: async (req, res) => {
                    const newUser = {
                        name:req.payload.name,
                        lastName:req.payload.lastName
                    };
                    return res.response({
                        datos: newUser
                    }).type('application/json');
                }
            },
            {
                method:'PUT',
                path:'/users/{id}',
                handler: async (req, res) => {
                    const newUser = {
                        name:req.payload.name,
                        lastName:req.payload.lastName
                    };
                    return res.response({
                        datos: newUser,
                        mensaje: `User ID:${req.params.id} successfully modified!`
                    }).type('application/json');
                }
            },
            {
                method:'DELETE',
                path:'/users/{id}',
                handler: async (req, res) => {
                    const newUser = {
                        name:req.payload.name,
                        lastName:req.payload.lastName
                    };
                    return res.response({
                        datos: newUser,
                        mensaje: `User ID:${req.params.id} successfully removed!`
                    }).type('application/txt');
                }
            }
        ]);
    }
}