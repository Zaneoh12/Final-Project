
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './page';   
import QuizPage from './QuizPage';   

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />    {/* Home Page */}
        <Route path="/quiz" element={<QuizPage />} /> {/* Quiz Page */}
      </Routes>
    </Router>
  );
};

export default App;
