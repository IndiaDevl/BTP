
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello World from SAP BTP Development!");
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route to serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

