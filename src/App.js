import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/UserLogin/Login/Login';
import Registration from './Pages/UserLogin/Registration/Registration';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        {/* <Route path="/sign/up" element={<Registration />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
