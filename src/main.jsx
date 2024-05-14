import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogList from './components/LogList.jsx'
import LogIngestForm from './components/LogIngestForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/logs" element={<LogList />}/>
    <Route path="/ingest" element={<LogIngestForm />} />
  </Routes>
  </BrowserRouter>
)
