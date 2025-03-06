const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3002;

app.use(cors()); // Allow frontend to access API

// API Route
app.get("/api/greet", (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({ error: "Name is required." });
    }

    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
