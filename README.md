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

## Railway

Deploy the frontend and backend as two separate Railway services from this monorepo.

### Backend service

- Root Directory: `/backend`
- Config File Path: `/backend/railway.json`
- Environment variables:
  - `FRONTEND_ORIGIN=https://your-frontend-domain`
  - `SUPABASE_URL=...`
  - `SUPABASE_SERVICE_ROLE_KEY=...`
  - `SUPABASE_DB_TABLE=app_state`
  - `SUPABASE_DB_ROW_ID=main`
  - `SUPABASE_STORAGE_BUCKET=uploads`

### Frontend service

- Root Directory: `/frontend-react`
- Config File Path: `/frontend-react/railway.json`
- Environment variables:
  - `VITE_API_BASE=https://your-backend-domain/api`
