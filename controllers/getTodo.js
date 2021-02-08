const Todo = require("../model/todo");


const getTodo = async (req, res) => {

  const sorted = +req.query.sorted || 1;
  const page = +req.query.page || 1;
  try {
    const totalTodos = await Todo.find().countDocuments();
    const todosPerPage = 4;
    const todoCalc = Math.ceil(totalTodos / todosPerPage);
    const displayedTodos = todosPerPage * page;

    const data = await Todo.find().limit(displayedTodos).sort({ date: sorted })

    res.render("index.ejs",
      {
        data,
        totalTodos,
        todoCalc,
        displayedTodos,
        todosPerPage,
        errors: "empty"
      })

  }

  catch (err) {
    res.render("error.ejs", { error: err })
  }
};

module.exports = getTodo;