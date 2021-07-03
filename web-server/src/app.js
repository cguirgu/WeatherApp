const path = require("path")
const express = require("express")
const hbs = require("hbs")

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// Setup handlebars and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
	res.render("index", {
		title: "Weather App",
		name: "Tina Guirguis",
	})
})

app.get("/about", (req, res) => {
	res.render("about", {
		title: "About Me",
		name: "Tina Guirguis",
	})
})

app.get("/help", (req, res) => {
	res.render("help", {
		title: "Help Page",
		message: "Here is your help",
		name: "Tina Guirguis",
	})
})

app.get("/weather", (req, res) => {
	res.send({
		forecast: "cold",
		location: "New York",
	})
})

// Set up 404 page

app.get("/help/*", (req, res) => {
	res.render("404", {
		title: "404",
		error: "Help article not found.",
		name: "Tina Guirguis",
	})
})

app.get("*", (req, res) => {
	res.render("404", {
		title: "404",
		error: "Page not found.",
		name: "Tina Guirguis",
	})
})

app.listen(3000, () => {
	console.log("Server is up on port 3000")
})
