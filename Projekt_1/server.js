const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    console.log("yay i hit an endpoint", req.method);
    res.sendStatus(201);
})

app.get("/dashboard", (req, res) => {
    console.log("yooo i hit /dashboard endpoint", req.method);
    res.send("Welcome to the dashboard");
})

app.listen(PORT, () => console.log(`Server has started on ${PORT}`))