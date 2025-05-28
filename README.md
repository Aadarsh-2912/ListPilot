
# 🧑‍💼 ListPilot [Agent Management Dashboard]

A full-stack web application for managing agents with functionalities to add, view, delete agents, upload files, and distribute tasks. Built using React (TypeScript) for the frontend and Node.js + Express for the backend with MongoDB as the database.

🌐 **Live Website**: [https://list-pilot-puce.vercel.app/login](https://list-pilot-puce.vercel.app/login)

🔐 **Login Credentials**:
- Email: `admin@example.com`
- Password: `admin123`

---

## 🚀 Features

- Add new agents with name, email, mobile, and password  
- View list of all agents  
- Delete agents with confirmation  
- Refresh agents list dynamically  
- Upload files (e.g. CSV, XLSX)  
- Distribute tasks (future integration)  

---

## 📁 Project Structure

```
ListPilot/
├── backend/
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── seeder.js
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── agentController.js
│   │   ├── authController.js
│   │   └── uploadController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Agent.js
│   │   ├── Task.js
│   │   └── admin.js
│   ├── routes/
│   │   ├── agentRoutes.js
│   │   ├── authRoutes.js
│   │   └── uploadRoutes.js
│   ├── uploads/
│   │   └── <uploaded-files>
│   └── utils/
│       └── csvParser.js
├── frontend/
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src/
│       ├── App.css
│       ├── App.test.tsx
│       ├── App.tsx
│       ├── index.css
│       ├── index.tsx
│       ├── logo.svg
│       ├── react-app-env.d.ts
│       ├── reportWebVitals.ts
│       ├── setupTests.ts
│       ├── components/
│       │   ├── AddAgent.tsx
│       │   ├── FileUpload.tsx
│       │   ├── LoginForm.tsx
│       │   ├── ShowAgents.tsx
│       │   └── TaskDistribution.tsx
│       └── pages/
│           ├── Dashboard.tsx
│           └── Login.tsx
```

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **Other**: REST API, Fetch API  

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Aadarsh-2912/ListPilot.git
cd ListPilot
```

### 2. Install Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### 3. Set Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
PORT=5000
MONGO_URI=your-mongo-uri
```

### 4. Run the App

#### Backend
```bash
cd backend
node server.js
```

#### Frontend
```bash
cd frontend
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📡 API Endpoints

| Method | Endpoint               | Description            |
|--------|------------------------|------------------------|
| GET    | /api/agents/getAgents  | Fetch all agents       |
| POST   | /api/agents/addAgent   | Add a new agent        |
| DELETE | /api/agents/:id        | Delete an agent        |
| POST   | /api/auth/login        | Login                  |
| POST   | /api/files/upload      | Upload File            |
| GET    | /api/files/tasks       | Get task distribution  |

---

## 📬 Contact

For any queries or suggestions:  
- **Email**: aadarshanand2912@gmail.com  
- **GitHub**: [Aadarsh-2912](https://github.com/Aadarsh-2912)

---

## 📄 License

This project is open-source and free to use under the **MIT License**.
