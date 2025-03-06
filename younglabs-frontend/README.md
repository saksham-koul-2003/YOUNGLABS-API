Younglabs Greeting App

A simple web application that provides a personalized greeting message using a Node.js Express backend and a React frontend.

-> Features

 -> User enters their name in the input field.
-> The frontend sends a request to the backend API.
-> The backend returns a personalized greeting message.

-> Tech Stack

Backend: Node.js, Express
Frontend: React, Axios
Setup Instructions

1. Clone the Repository
git clone https://github.com/saksham-koul-2003/YOUNGLABS-API.git
cd YOUNGLABS-API
2. Run the Backend
cd backend
npm install
npm start
The server runs at http://localhost:3002

3. Run the Frontend
cd ../younglabs-frontend
npm install
npm start
The React app runs at http://localhost:3000

API Endpoint

GET /api/greet?name=YourName

Response:
{
  "message": "Hello, YourName! Welcome to Younglabs."
}
Author

Saksham Koul

