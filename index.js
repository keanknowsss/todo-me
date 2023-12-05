import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 8000;

// Middlewares
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// Stores all tasks
let tasks = [];

// Routes
app.get("/", (req, res) => {
	res.render("index.ejs", { tasks });
});
app.post("/add-task", (req, res) => {
	let task = req.body["task"];
	if (task) tasks.push(task);
	res.redirect("/");
});
app.post("/edit-task/:index", (req, res) => {
	const TASK_INDEX = req.params.index;
	const NEW_TASK = req.body["edited_task"];
	tasks[TASK_INDEX] = NEW_TASK;
	res.redirect("/");
});
app.post("/delete-task/:index", (req, res) => {
	const TASK_INDEX = req.params.index;
	tasks.splice(TASK_INDEX, 1);
	res.redirect('/');
});

// Server Listener
app.listen(port, () => {
	console.log(`Listening on Port: ${port}`);
});
