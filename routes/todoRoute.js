const express = require("express");
const router = express.Router();

const postTodo = require("../controllers/postTodo");
const editTodo = require("../controllers/editTodo");
const deleteTodo = require("../controllers/deleteTodo");
const selectTodo = require("../controllers/selectTodo");
const getTodo = require("../controllers/getTodo");


router.get("/", getTodo);

router.post("/", postTodo);

router.get("/edit/:id", selectTodo);

router.post("/edit", editTodo);

router.get("/delete/:id", deleteTodo);


module.exports = router;

