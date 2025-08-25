import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Authenticator } from './components/Authenticator.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {DailyQuiz} from "./components/DailyQuiz.jsx";
import {DailyQuizListView} from "./pages/DailyQuizListView.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authenticator />} />
        <Route path="/daily-quiz-list" element={<DailyQuizListView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
