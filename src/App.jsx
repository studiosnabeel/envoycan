import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import SignIn from './pages/signin/SignIn';
import Home from './components/home/Home';
import SideMenu from './components/sidemenu/SideMenu';
import PageContent from './components/pagecontent/PageContent';
import Dashboard from './components/dashboard/Dashboard';
import Billing from './components/billing/Billing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/sidemenu" element={<SideMenu />} />
          <Route path="/pagecontent" element={<PageContent />}>
            <Route index element={<Dashboard />} />
            <Route path="/pagecontent/dashboard" element={<Dashboard />} />
            <Route path="/pagecontent/billing" element={<Billing />} />
          </Route>
        </Route>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
