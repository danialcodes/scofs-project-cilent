import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Registration from './Pages/Login/Registration/Registration';
import Login from './Pages/Login/Login/Login';
import Profile from './Pages/Profile/Profile';
import Scoreboard from './Pages/Scoreboard/Scoreboard';
import Settings from './Pages/Settings/Settings';
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

// import AuthProvider from './contexts/AuthProvider/AuthProvider';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<PrivateRoute><Header/> <Home /> </PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<PrivateRoute><Header/> <Profile /> </PrivateRoute>} />
          <Route path="/scoreboard" element={<PrivateRoute><Header/><Scoreboard /></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute><Header/><Settings /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Header/><Dashboard /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><Header/>< About /></PrivateRoute>} />
          <Route path="/projects" element={<PrivateRoute><PrivateRoute><Header/><Projects/></PrivateRoute></PrivateRoute>} />
          <Route path="/terms" element={"<h1>Terms and conditions</h1>"} />
          <Route path="*" element={"<h1>404 error!!<br/>Page not found</h1>"}/>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
