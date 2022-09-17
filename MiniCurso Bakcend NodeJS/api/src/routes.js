const { Router } = require('express');

const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.json({ 
        status: 200,
        message: 'API OK!'
     });
});

routes.post('/users-post', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users-update/:id', UserController.update)

module.exports = routes;