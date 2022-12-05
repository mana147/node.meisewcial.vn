import {Router} from 'express';

let users = [
	{id: 1, name: "User1", email: "user1@gmail.com", age: 31}, 
	{id: 2, name: "User2", email: "user2@gmail.com", age: 20},
	{id: 3, name: "User1", email: "user1.2@gmail.com", age: 25}
];

let user_router =  Router();

user_router.get('/', function(req, res , next){
    res.send(users);
})


export default user_router;