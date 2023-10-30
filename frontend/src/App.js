import './App.css';
import axios from 'axios'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';
import { useEffect } from 'react';
function App() {
  
  useEffect(()=>{
  })

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/chats' element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
