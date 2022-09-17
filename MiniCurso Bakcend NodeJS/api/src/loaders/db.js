const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://Cuba:Xpto002@fatecnodejs.yxkibst.mongodb.net/?retryWrites=true&w=majority');
}

module.exports = startDB;