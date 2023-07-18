import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import SignIn from './pages/signin/SignIn';
import Home from './components/home/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
