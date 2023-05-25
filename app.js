const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const addUser = require('./routes/add-users');
const listUsers = require('./routes/users');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', "views");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(listUsers.routes);
app.use(addUser);

// for 404
app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, "views", "404.html"))
    res.status(404).render("404", {
        pageTitle: "Page Not Found", 
        path: "none"})
});

app.listen(PORT, () => console.log(`Nodemon listening on ${PORT}`));