# Livio CRM

This repository contains the Livio CRM frontend and backend applications.

## Structure

- `frontend-react/` - React + Vite frontend
- `backend/` - Express API backend
- `client-contract.html`, `client-invoice.html`, `daily-tracker.html`, `livio.html`, `momentum.html` - legacy HTML assets kept with the project

## Frontend

```bash
cd frontend-react
npm install
npm run dev
```

Build the frontend with:

```bash
cd frontend-react
npm run build
```

## Backend

```bash
cd backend
npm install
copy .env.example .env
npm start
```

The backend expects environment variables in `backend/.env` and uses `backend/data/db.json` as its default data file.
