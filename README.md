# Task Prioritization System

A full-stack productivity application that prioritizes tasks based on urgency, effort, and importance using deterministic scoring logic. The system provides REST APIs built with Django REST Framework and a responsive frontend built with React.

---

# Project Overview

This application allows users to:

* Submit tasks
* Validate task data
* Calculate priority score (0–100)
* Categorize tasks into High, Medium, and Low priority
* View results in a responsive dashboard

The system uses logical computation instead of database storage, making it lightweight and fast.

---

# Tech Stack

## Backend

* Python 3
* Django
* Django REST Framework

## Frontend

* React (Vite)
* CSS Modules
* Fetch API

---

# Project Structure

```
task_system/
│
├── backend
│   │
│   ├── task_system/
│   │
│   ├── tasks/
│   │   ├── services/
│   │   │   ├── prioritization_service.py
│   │   │   ├── validation_service.py
│   │   │
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── models.py
│   │
│   ├── manage.py
│
├── task_system_frontend/
│
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskTable.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│
```

---

# Architecture Design

The system follows layered architecture:

Frontend Layer

React UI for task input and display

API Layer

Django REST APIs handle requests and responses

Service Layer

Contains business logic:

validation_service.py

prioritization_service.py

This separation ensures scalability and maintainability.

---

# Priority Calculation Logic

Each task is scored between 0 and 100 based on:

## 1. Urgency (40%)

Closer deadline = higher score

Formula:

```
urgency_score = (10 − deadline_days) × 4
```

Minimum = 0
Maximum = 40

---

## 2. Importance (40%)

Higher importance = higher score

Formula:

```
importance_score = importance × 4
```

Minimum = 0
Maximum = 40

---

## 3. Effort (20%)

Lower effort = higher score

Formula:

```
effort_score = max(0, 20 − estimated_hours × 2)
```

Maximum = 20

---

# Final Score Formula

```
priority_score =
urgency_score +
importance_score +
effort_score
```

Maximum Score = 100

---

# Priority Categories

| Score  | Category |
| ------ | -------- |
| 70–100 | High     |
| 40–69  | Medium   |
| 0–39   | Low      |

---

# Conflict Resolution

Scenario Handling:

Highly important but distant deadline

Still receives high score due to importance weight

Low importance but urgent

Receives moderate score due to urgency

Task requiring more time than deadline

Effort penalty applied

---

# Edge Case Handling

Deadlines of zero

Treated as maximum urgency

Invalid importance

Task rejected

Malformed data

Task rejected with error message

Equal scores

Order preserved

Negative values

Rejected

---

# API Endpoints

---

## Validate Tasks

Endpoint:

```
POST /tasks/validate
```

Purpose:

Validates task input

Response:

```
valid_tasks
invalid_tasks
```

---

## Prioritize Tasks

Endpoint:

```
POST /tasks/prioritize
```

Purpose:

Calculates priority score and category

Response:

```
task_id
title
score
category
```

---

## Health Check

Endpoint:

```
GET /health
```

Response:

```
Service running
```

---

# Example Request

```
[
 {
   "task_id": 1,
   "title": "Build API",
   "deadline": 2,
   "estimated_time": 5,
   "importance": 8
 }
]
```

---

# Example Response

```
[
 {
   "task_id": 1,
   "title": "Build API",
   "score": 82,
   "category": "High"
 }
]
```

---

# Setup Instructions

---

# Backend Setup

Navigate to backend folder:

```
cd task_system
```

Create virtual environment:

```
python -m venv venv
```

Activate:

Windows

```
venv\Scripts\activate
```

Install dependencies:

```
pip install django djangorestframework
```

Run server:

```
python manage.py runserver
```

Server runs:

```
http://127.0.0.1:8000
```

---

# Frontend Setup

Navigate:

```
cd task_system_frontend
```

Install dependencies:

```
npm install
```

Run:

```
npm run dev
```

Frontend runs:

```
http://localhost:5173
```

---

# Key Design Decisions

No database used

Reason:

Assignment requires computation only

Service layer separated

Improves scalability

Deterministic scoring

Same input always produces same output

REST API design

Industry standard

---

# Features

Task validation

Priority calculation

Responsive UI

REST APIs

Modular architecture

---

# Future Improvements

Database integration

User authentication

Task persistence

Task editing and deletion

Deployment

---

# Author

Krunal Sudrik

Full Stack Developer

---

# Conclusion

This system demonstrates clean architecture, REST API design, and business logic implementation using Django and React.

It is scalable, maintainable, and production-ready in design.
