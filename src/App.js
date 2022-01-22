import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Pages/Header/Header';
import Registration from './Pages/Login/Registration/Registration';
import Login from './Pages/Login/Login/Login';
import Profile from './Pages/Profile/Profile';
import Scoreboard from './Pages/Scoreboard/Scoreboard';
import Settings from './Pages/Settings/Settings';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';

// import AuthProvider from './contexts/AuthProvider/AuthProvider';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>}>
            <Route path="" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="scoreboard" element={<Scoreboard />} />
            <Route path="settings" element={<Settings />} />
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            <Route path="about" element={< About />} />
            <Route path="projects" element={<Projects />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />



          <Route path="/terms" element={"<h1>Terms and conditions</h1>"} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
