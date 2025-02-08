const express = require("express");
const app = express();
const PORT = 3000;

let data = ["Lam"];

// Middleware
app.use(express.json());

// Type 1Website endpoint (these endpoints are for sending back html code)

app.get("/", (req, res) => {
  console.log("User requested the home page");
  res.send(`
    <body 
    style="background: pink;
    color: blue;">
        <h1>DATA:</h1>
        <p> ${JSON.stringify(data)}</p>
        <a href="/dashboard">Dashboard</a>
    </body>
    <script>console.log("This is my script")</script>
    `);
});

app.get("/dashboard", (req, res) => {
  res.send(`
    <body>
    
    <h1>Dashboard</h1>
    <a href="/">Home</a>
    </body>
    `);
});

// Type 2 API endpoint (non visual)

//CRUD(Method) - Create(post), Read(get), Update(put), Delete(delete)

app.get("/api/data", (req, res) => {
  console.log("This one was for data");
  res.status(599).send(data);
});
// req.body ist inhalt des request
app.post("/api/data", (req, res) => {
  // somebody wants to create a user (bsp signup)
  // user clicks on a button after filling out a form
  const newEntry = req.body;
  console.log(newEntry);
  data.push(newEntry.name);
  res.sendStatus(201);
});

app.delete("/api/data", (req, res) => {
  data.pop();
  console.log("we deleted the last element");
  res.sendStatus(204);
});

app.listen(PORT, () => console.log(`Server has started on ${PORT}`));

