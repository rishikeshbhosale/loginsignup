
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/forms/login';
import Singup from './components/forms/singup';
import User from "./pages/user";
import Notfound from "./pages/notfound"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/user" element={<User />} />
          <Route path="/*" element={<Notfound />} />

        </Routes>
      </Router>

      {/* <Login/>
      <Singup />
      <User/> */}

    </div>
  );
}

export default App;
