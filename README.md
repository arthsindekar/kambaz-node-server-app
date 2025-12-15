

# Kambaz Node Server App

Backend server for **Kambaz / Pazza**, a full-stack learning management and discussion platform inspired by Canvas.
This repository implements the **Node.js + Express + MongoDB** backend that powers authentication, courses, modules, assignments, posts, follow-ups, replies, folders, and role-based access control.

---

## 🚀 Tech Stack

* **Runtime:** Node.js (ES Modules)
* **Framework:** Express.js
* **Database:** MongoDB + Mongoose
* **Authentication:** Session-based auth (cookies)
* **Deployment:** Render
* **Frontend Consumers:**

  * `kambaz-next-js` (Next.js 15 / React 19)
  * Pazza discussion frontend

---

## 🧠 Core Concepts

* **RESTful API design**
* **Role-based access control** (Student / Instructor / Admin)
* **Nested discussion models** (Posts → Follow-ups → Replies)
* **Course-scoped data isolation**
* **Production-ready middleware** (logging, sessions, CORS)
* **Separation of concerns** (routes, DAOs, schemas)

---

## 📂 Project Structure

```
kambaz-node-server-app/
│
├── index.js                 # App entry point
├── package.json
│
├── Account/                 # Authentication & users
│
├── Courses/                 # Courses & enrollments
│
├── Modules/                 # Course modules
├── Assignments/             # Assignments CRUD
│
├── Pazza/                   # Discussion system
│   ├── Posts/
│   ├── Followups/
│   ├── Replies/
│   └── Folders/
│
```

---

## 🔐 Authentication & Sessions

* Uses **server-side sessions**
* Cookies configured with:

  * `httpOnly`
  * `secure` (production)
  * `sameSite=None` for cross-domain frontend support
* Persistent login across refreshes
* Session shared with deployed Next.js frontend

---

## 📘 Features

### 👤 User & Auth

* Register / Login / Logout
* Session persistence
* Role detection (Student / Instructor)
* Protected routes

### 📚 Courses

* Create / update / delete courses
* Instructor-only course management
* Student enrollment

### 🧩 Modules & Assignments

* Course-scoped modules
* Ordered content
* Assignment CRUD
* Due dates and metadata

### 💬 Pazza (Discussion System)

* Posts (Questions / Notes / Polls)
* Nested **Follow-ups**
* Nested **Replies**
* Resolve / unresolve follow-ups
* View tracking
* Folder-based organization
* Course-specific isolation
* Instructor vs student privileges

---



## 🧬 Database Modeling (MongoDB)

* **Mongoose schemas**
* Embedded + referenced documents where appropriate
* Recursive schemas for nested replies
* Automatic timestamps
* Indexed course IDs for performance

---

## 🧪 Logging & Debugging

* Custom middleware logs:

  ```
  METHOD /route STATUS_CODE
  ```
* Helpful during Render deployments and debugging request flows
* Error handling centralized

---


Render production environment must define the same variables.

---

## 🏃 Running Locally

```bash
npm install
npm start
```

Server runs on:

```
http://localhost:4000
```

Make sure MongoDB is accessible.

---

## 🚢 Deployment

* Deployed on **Render**
* CI/CD via GitHub → Render auto-deploy
* Supports cross-domain cookies for Vercel frontend

---

## 🔗 Frontend Repositories

* **Kambaz Frontend (Next.js):**
  `kambaz-next-js`
* **Pazza UI:**
  Integrated inside Kambaz frontend

---

## 🛠️ Design Philosophy

* Backend is **stateless except sessions**
* Logic pushed into **DAO layer**
* Routes remain thin and readable
* Built for **academic rigor + real-world deployment**
* Designed to scale with additional services

---

## 📌 Status

Actively developed and used in coursework at **Northeastern University (Khoury College of Computer Sciences)**.

---

## 👨‍💻 Author

**Arth Sindekar**
Master’s in Computer Science
Northeastern University

---

