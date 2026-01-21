#  Tann Mann Foundation - Volunteer Registration System

A full-stack web application built with **Angular** (frontend), **Node.js/Express** (backend), and **TiDB Cloud** (MySQL database) for volunteer registration and management.

##  Live Demo

- **Frontend (Vercel):** [https://tannmannfoundationassignmentangular.vercel.app/](https://tannmannfoundationassignmentangular.vercel.app/)
- **Backend (Render):** [https://tannmann-foundation-assignment-angular.onrender.com](https://tannmann-foundation-assignment-angular.onrender.com)


##  Tech Stack

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

##  Features

✅ User registration with real-time form validation  
✅ Auto-refresh user list every 60 seconds  
✅ Beautiful gradient UI with glassmorphism effects  
✅ Responsive design for mobile and desktop  
✅ RESTful API endpoints  
✅ Cloud-hosted MySQL database  
✅ CORS-enabled for cross-origin requests  
✅ Error handling with user-friendly messages  

##  Project Structure

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


   ```

##  API Endpoints

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | `/`            | Health check (homepage)  |
| GET    | `/api/users`   | Get all registered users |
| POST   | `/api/users`   | Register a new user      |




##  Environment Variables

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

##  Troubleshooting

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

## Assignment Completion Checklist

- ✅ Angular Frontend with Reactive Forms
- ✅ Node.js/Express Backend API
- ✅ Cloud MySQL Database (TiDB)
- ✅ User Registration & List Display
- ✅ Deployed to Vercel (Frontend) + Render (Backend)
- ✅ GitHub Repository with clean code
- ✅ README with setup instructions

##  Developer

**Saurabh Biswal**
- GitHub: [@SaurabhBiswal](https://github.com/SaurabhBiswal)
- Project: Tann Mann Foundation Assignment

##  License

This project was created as part of a coding assignment for Tann Mann Foundation.

---

**Made with ❤️ BY SAURABH BISWAL using Angular & Node.js**
