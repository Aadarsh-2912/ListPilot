# 🧑‍💼 Agent Management Dashboard

A full-stack web application for managing agents with functionalities to add, view, delete agents, upload files, and distribute tasks. Built using React (TypeScript) for the frontend and Node.js + Express for the backend with MongoDB as the database.

---

## 🚀 Features

- Add new agents with name, email, mobile, and password
- View list of all agents
- Delete agents with confirmation
- Refresh agents list dynamically
- Upload files (e.g. CSV, PDFs)
- Distribute tasks (future integration)

---

## 📁 Project Structure

```
/client             # React + TypeScript frontend
  /components
  /pages
  /public
/server             # Node.js + Express backend
  /controllers
  /models
  /routes
  /config
```

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Other:** REST API, Fetch API

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/agent-management-dashboard.git
cd agent-management-dashboard
```

### 2. Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

### 3. Set Environment Variables

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/agents_db
```

### 4. Run the App

#### Backend

```bash
cd server
npm start
```

#### Frontend

```bash
cd ../client
npm run dev
```

Visit: `http://localhost:5173`

---

## 📡 API Endpoints

| Method | Endpoint                         | Description          |
|--------|----------------------------------|----------------------|
| GET    | `/api/agents/getAgents`          | Fetch all agents     |
| POST   | `/api/agents/addAgent`           | Add a new agent      |
| DELETE | `/api/agents/:id`                | Delete an agent      |

---

## 👤 Sample Agents

```json
[
  { "name": "Alice Johnson", "email": "alice@example.com", "mobile": "9876543210", "password": "pass1234" },
  { "name": "Bob Smith", "email": "bob@example.com", "mobile": "9876543211", "password": "pass1234" },
  { "name": "Charlie Davis", "email": "charlie@example.com", "mobile": "9876543212", "password": "pass1234" },
  { "name": "Diana Prince", "email": "diana@example.com", "mobile": "9876543213", "password": "pass1234" },
  { "name": "Evan Stone", "email": "evan@example.com", "mobile": "9876543214", "password": "pass1234" }
]
```

Use these agents to populate the database during testing.

---

## 📌 Notes

- Passwords are stored as plain text in this demo. **Use bcrypt for production.**
- Add proper form validation and authentication for production.
- File upload and task distribution components can be expanded based on your requirements.

---

## 📬 Contact

For any queries or suggestions:

- **Email:** yourname@example.com
- **GitHub:** [your-username](https://github.com/your-username)

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).