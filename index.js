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
app.post("/edit-task", (req, res) => {
	console.log('edit here');
});

// Server Listener
app.listen(port, () => {
	console.log(`Listening on Port: ${port}`);
});
