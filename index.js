const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/server", (req, res) => {
    res.render("server");
});

app.get("/void", (req, res) => {
    res.render("void");
});

// Handle 404
app.use((req, res, next) => {
    res.status(404).render("404");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
