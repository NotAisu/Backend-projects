import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5003;

//Get the path of the current file
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current file
const __dirname = dirname(__filename);

// Middleware
app.use(express.json());
// Serve the html file from the /public directory
// tells express to serve the files located in the /public folder as static files
app.use(express.static(path.join(__dirname, "../public")));

// Serving up the html file from the /public directory
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

