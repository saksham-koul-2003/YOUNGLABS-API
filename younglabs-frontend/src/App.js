import React, { useState } from "react";
import axios from "axios";

function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const getGreeting = async () => {
        if (!name) {
            setMessage("Error: Name is required.");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3002/api/greet?name=${name}`);
            setMessage(response.data.message);
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Younglabs Greeting App</h1>
            <input 
                type="text" 
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={getGreeting}>Get Greeting</button>
            <h3>{message}</h3>
        </div>
    );
}

export default App;
