# 🧑‍💼 Agent Management Dashboard

A full-stack web application for managing agents with functionalities to add, view, delete agents, upload files, and distribute tasks. Built using React (TypeScript) for the frontend and Node.js + Express for the backend with MongoDB as the database.

---

## 🚀 Features

- Add new agents with name, email, mobile, and password
- View list of all agents
- Delete agents with confirmation
- Refresh agents list dynamically
- Upload files (e.g. CSV, xlsx)
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
git clone https://github.com/Aadarsh-2912/ListPilot.git
cd agent-management-dashboard
```

### 2. Install Dependencies

#### Backend

```bash
npm install
```

#### Frontend

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
MONGO_URI=your-mongo-uri
```

### 4. Run the App

#### Backend

```bash
node server.js
```

#### Frontend

```bash
npm start
```

Visit: `http://localhost:3000`

---

## 📡 API Endpoints

| Method | Endpoint                         | Description          |
|--------|----------------------------------|----------------------|
| GET    | `/api/agents/getAgents`          | Fetch all agents     |
| POST   | `/api/agents/addAgent`           | Add a new agent      |
| DELETE | `/api/agents/:id`                | Delete an agent      |
| POST   | `/api/auth/login`                | Login                |
| POST   | `/api/files/upload`              | Upload File          |
| GET    | `/api/files/tasks`               | Get task distribution|


---

## 📬 Contact

For any queries or suggestions:

- **Email:** aadarshanand2912@gmail.com
- **GitHub:** [Aadarsh-2912](https://github.com/Aadarsh-2912)

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).
