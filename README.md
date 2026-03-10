# Event Feedback Management System

## Overview

The Event Feedback Management System is a full stack web application that allows users to submit feedback for different events. The system collects feedback through a frontend interface, processes it using a backend server, and displays the feedback for review.

This project was developed as part of a **Full Stack Development Internship**.

---

## Features

- Modern homepage with navigation
- Event listing page with event cards
- Feedback submission form
- Star rating system
- View submitted feedback
- Admin login system
- Admin dashboard to manage feedback
- Feedback analytics using charts
- Professional UI using Bootstrap

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- Bootstrap
- JavaScript

### Backend
- Node.js
- Express.js

### Tools
- VS Code
- GitHub
- Live Server

---

## Project Structure

event-feedback-system
│
├── frontend
│ ├── index.html
│ ├── events.html
│ ├── feedback.html
│ ├── view-feedback.html
│ ├── login.html
│ ├── dashboard.html
│ ├── analytics.html
│ └── style.css
│
├── backend
│ ├── server.js
│ └── package.json
│
└── README.md


---

## Installation and Setup

### 1 Install Node.js
Download Node.js from:
https://nodejs.org

---

### 2 Clone the Repository
https://github.com/chamika217/Event-Feedback-Mangement-System.git


---

### 3 Install Backend Dependencies

Navigate to the backend folder and run:
npm install

---

### 4 Start Backend Server


node server.js


Server will run at:


http://localhost:3000


---

### 5 Run Frontend

Open the **frontend folder** and run:


index.html


or use **Live Server in VS Code**.

---

## System Workflow


User submits feedback
↓
Frontend sends request to backend API
↓
Backend processes feedback
↓
Feedback stored in server memory
↓
Feedback displayed on dashboard and analytics page


---

## Admin Login

Admin access allows viewing feedback in a dashboard.


Username: admin
Password: 1234


---

## Future Improvements

- Add database integration (MongoDB)
- User authentication system
- Feedback editing and deletion
- Event registration system
- Deploy application online

---

## Author

Chamika  
Full Stack Development Internship Project
