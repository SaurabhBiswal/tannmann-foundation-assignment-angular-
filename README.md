# 🌅 Tann Mann Foundation - Volunteer Registration System

A full-stack web application built with **Angular** (frontend), **Node.js/Express** (backend), and **TiDB Cloud** (MySQL database) for volunteer registration and management.

## 🚀 Live Demo

- **Frontend (Vercel):** [https://tannmannfoundationassignmentangular.vercel.app/](https://tannmannfoundationassignmentangular.vercel.app/)
- **Backend (Render):** [https://tannmann-foundation-assignment-angular.onrender.com](https://tannmann-foundation-assignment-angular.onrender.com)

## 📸 Screenshots

![Working Application](https://via.placeholder.com/800x400?text=Add+Your+Screenshot+Here)

## 🛠️ Tech Stack

### Frontend
- **Framework:** Angular 21.1.0
- **Language:** TypeScript
- **Styling:** Custom CSS with modern gradients
- **HTTP Client:** HttpClient (RxJS)
- **Form Handling:** Reactive Forms

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** TiDB Cloud (MySQL-compatible)
- **ORM:** mysql2 with Promises
- **Middleware:** CORS, body-parser

### Deployment
- **Frontend:** Vercel
- **Backend:** Render
- **Database:** TiDB Cloud (AWS Singapore)

## ✨ Features

✅ User registration with real-time form validation  
✅ Auto-refresh user list every 60 seconds  
✅ Beautiful gradient UI with glassmorphism effects  
✅ Responsive design for mobile and desktop  
✅ RESTful API endpoints  
✅ Cloud-hosted MySQL database  
✅ CORS-enabled for cross-origin requests  
✅ Error handling with user-friendly messages  

## 📁 Project Structure

```
angular-form-app/
├── backend/                  # Node.js backend
│   ├── server.js            # Express server
│   ├── db.js                # Database connection
│   ├── setup-db.js          # Database initialization script
│   ├── setup.sql            # SQL schema
│   ├── .env                 # Environment variables
│   └── package.json         
│
├── tannmann-angular/        # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/  # User Form & List components
│   │   │   ├── services/    # HTTP services
│   │   │   ├── models/      # TypeScript interfaces
│   │   │   └── app.component.*
│   │   └── main.ts
│   ├── angular.json
│   ├── vercel.json          # Vercel SPA routing config
│   └── package.json
│
└── README.md
```

## 🏃 Local Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- TiDB Cloud account (or local MySQL)

### 1. Clone Repository
```bash
git clone https://github.com/SaurabhBiswal/tannmann-foundation-assignment-angular-.git
cd angular-form-app
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
echo "PORT=5000
DB_HOST=your-tidb-host
DB_PORT=4000
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=tannmann_foundation" > .env

# Setup database tables
node setup-db.js

# Start backend server
npm start
```

Backend will run on `http://localhost:5000`

### 3. Frontend Setup
```bash
cd tannmann-angular
npm install

# For local development, update user.service.ts:
# private apiUrl = 'http://localhost:5000/api/users';

# Start Angular dev server
ng serve
# or
npm start
```

Frontend will run on `http://localhost:4200`

## 🗄️ Database Setup (TiDB Cloud)

1. **Create TiDB Cluster**
   - Go to [TiDB Cloud](https://tidbcloud.com/)
   - Create a free Developer Tier cluster
   - Select AWS Singapore region

2. **Configure Network Access**
   - Go to **Security > IP Access List**
   - Add `0.0.0.0/0` (Allow Access from Anywhere)
   - *For production, whitelist specific IPs*

3. **Get Connection Details**
   - Click **Connect** button
   - Copy Host, Port, User, Password, Database name
   - Update `backend/.env` with these credentials

4. **Initialize Database**
   ```bash
   cd backend
   node setup-db.js
   ```

## 📡 API Endpoints

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | `/`            | Health check (homepage)  |
| GET    | `/api/users`   | Get all registered users |
| POST   | `/api/users`   | Register a new user      |

### Example Request (POST)
```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "email": "john@example.com"
}
```

### Example Response
```json
{
  "success": true,
  "message": "User registered successfully",
  "id": 1
}
```

## 🌐 Deployment

### Deploy Backend to Render

1. Create new **Web Service** on [Render](https://render.com)
2. Connect GitHub repository
3. Configure:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
4. Add Environment Variables:
   - `DB_HOST`
   - `DB_PORT`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
5. Deploy!

### Deploy Frontend to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   cd tannmann-angular
   vercel --prod
   ```

3. Configure:
   - **Project Name:** `tannmann-foundation-assignment-angular`
   - **Root Directory:** `tannmann-angular`
   - **Build Command:** `ng build`
   - **Output Directory:** `dist/tannmann-angular/browser`

4. Vercel automatically uses `vercel.json` for SPA routing

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=5000
DB_HOST=gateway01.ap-southeast-1.prod.aws.tidbcloud.com
DB_PORT=4000
DB_USER=your_username.root
DB_PASSWORD=your_secure_password
DB_NAME=tannmann_foundation
```

### Frontend
No environment variables needed (API URL is hardcoded in `user.service.ts`)

## 🐛 Troubleshooting

### CORS Errors
- Ensure backend CORS is configured to allow `*` or specific frontend domain
- Check `server.js` CORS configuration

### Database Connection Failed
- Verify TiDB credentials in `.env`
- Check IP whitelist in TiDB Cloud (0.0.0.0/0)
- Ensure SSL is enabled for cloud databases

### 404 on Vercel Refresh
- Ensure `vercel.json` exists with SPA rewrite rules
- Redeploy if configuration was added after initial deployment

### Table Doesn't Exist
- Run `node setup-db.js` to create tables
- Verify database name matches `.env`

## 📝 Assignment Completion Checklist

- ✅ Angular Frontend with Reactive Forms
- ✅ Node.js/Express Backend API
- ✅ Cloud MySQL Database (TiDB)
- ✅ User Registration & List Display
- ✅ Deployed to Vercel (Frontend) + Render (Backend)
- ✅ GitHub Repository with clean code
- ✅ README with setup instructions

## 👨‍💻 Developer

**Saurabh Biswal**
- GitHub: [@SaurabhBiswal](https://github.com/SaurabhBiswal)
- Project: Tann Mann Foundation Assignment

## 📜 License

This project was created as part of a coding assignment for Tann Mann Foundation.

---

**Made with ❤️ using Angular & Node.js**
