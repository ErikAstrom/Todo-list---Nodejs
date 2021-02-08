const Todo = require("../model/todo");

//Create new todo
const postTodo = async (req, res) => {

    try {
        await new Todo({
            name: req.body.name
        }).save();
        res.redirect("/")
    }
    catch (err) {
        res.render("error.ejs", { error: err })
    }
};

module.exports = postTodo;