const express = require('express');

const router = express.Router();

const users = []
// const users = [{
//     name: 'Gregory',
//     location: 'Charlotte, NC', 
//     email: 'test@test.com'
// }];

router.get('/users',  (req, res, next) => {
    console.log("In users middleware");
    res.render('users', {
        pageTitle: "Users",
        users: users
    });
});

router.post('/users', (req, res, next) => {
    // console.log(req.body);
    users.push(req.body);
    console.log(users);
    res.redirect("/users");
    
})

exports.routes = router;
exports.users = users; 