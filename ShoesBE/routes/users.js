const express = require('express')
const cors = require('cors')
const route = express.Router()
const app =express()

const UsersController =  require('../route/users');

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(cors({ origin: '*', credentials: true }))
app.use(allowCrossDomain)

route.post('/api/users/create', UsersController.createUsers)
route.get('/api/users/allUser', UsersController.getAllUser)
route.get('/api/users/getUserById/:UserById', UsersController.getUserById)
route.delete('/api/users/deleteUsersById/:UsersId', UsersController.deleteUsersById)
route.patch('/api/users/updateUsersById/:UsersId', UsersController.updateUsersById)





// prefix 

module.exports = route