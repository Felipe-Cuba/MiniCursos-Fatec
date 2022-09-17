const e = require("express");

const users = [
    {
        id: 1,
        name: 'Felipe',
        email: 'felipeccuba1803@gmail.com'
    }
];

class UserController {
    store(req, res) {
        const {name, email} = req.body;

        if (!name || !email){
            return res.status(400).json({
                message: 'Nome e email são obrigatórios!!! >:('
            });
        }

        const newId = users[users.length - 1].id + 1;


        const newUser = {
            id: newId, 
            name,
            email,
        }

        users.push(newUser);

        return res.json({
            status: 200,
            message: 'Create user succefully!!'
        });
    }

    index(req, res){
        return res.status(200).json(users);
    }

    show(req, res){
        const { id } = req.params;

        if(!id){
            return res.status(400).json({
                message: 'Id not informed'
            });
        }

        const currentUser = users.find((user) => user.id === parseInt(id));
        if(!currentUser){
            return res.status(404).json({
                message: 'User not found...'
            });
        }

        return res.status(200).json(currentUser);
    }

    update(req, res){
        const { id } = req.params;
        const { name, email } = req.body;

        if (!name || !email){
            return res.status(400).json({
                message: 'Nome e email são obrigatórios!!! >:('
            });
        }

        if(!id){
            return res.status(400).json({
                message: 'Id not informed'
            });
        }

        const currentUserIndex = users.findIndex((user) => user.id === parseInt(id));
        if(!currentUserIndex){
            return res.status(404).json({
                message: 'User not found...'
            });
        }
        
        users[currentUserIndex].name = name;
        users[currentUserIndex].email = email;

        return res.status(200).json({
            message: 'User updated!'
        })

    }

    delete(){
        
    }
}

module.exports = new UserController();