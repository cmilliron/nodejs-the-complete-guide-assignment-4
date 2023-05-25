const express = require("express");

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("In add-user middleware")
    res.render('add-users', {
        pageTitle: "Add Users"
    })
})

module.exports = router;