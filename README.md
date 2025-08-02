# 🎮 Tic-Tac-Toe Authentication App

A full-stack user authentication system built using **Node.js**, **Express**, **MySQL**, and **React.js**, designed for a Tic-Tac-Toe game. This project includes features like user registration, login, and JWT-based authentication.

---

## 🧠 Features

- Register new users with validation  
- Secure login using hashed passwords (`bcrypt`)  
- JWT-based session authentication  
- MySQL as the database  
- REST API built with Express  
- Frontend login/register using React  
- CORS and dotenv configuration for secure local development  

---
## 🧑‍💻 Technologies Used

- **Frontend:** React.js, Axios, MUI  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Auth:** JWT (JSON Web Tokens)  
- **Other:** bcrypt, dotenv, CORS  

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tic-tac-toe-auth-app.git
cd tic-tac-toe-auth-app


2. Setup MySQL Database


Create a database named: tic_tac_toe

Run the following SQL to create the users table:

sql
Copy
Edit
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
3. Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file in the backend/ directory:

env
Copy
Edit
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=tic_tac_toe
JWT_SECRET=your_jwt_secret
Then start the backend:

bash
Copy
Edit
npm run dev
Backend runs at: http://localhost:5000

4. Frontend Setup


bash
Copy
Edit
cd ../frontend
npm install
npm start
Frontend runs at: http://localhost:3000


🚀 API Endpoints

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| POST   | `/api/users/register` | Register a user     |
| POST   | `/api/users/login`    | Login and get token |
