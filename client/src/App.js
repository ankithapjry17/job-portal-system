import { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Login";
import JobList from "./JobList";
import Profile from "./Profile"; // Import Profile component
import './App.css';

function App() {
  const [page, setPage] = useState("jobs");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [user, setUser] = useState(null); // New state for logged-in user

  // Effect to load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Effect to apply theme class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setPage("jobs"); // Redirect to jobs page after logout
  };

  const navigateToPage = (targetPage) => {
    setPage(targetPage);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="navbar-brand" onClick={() => navigateToPage("jobs")}>Job Portal 💼</h2>

        <div className="navbar-buttons">
          {!user && <button onClick={() => navigateToPage("login")}>Login</button>}
          {!user && <button onClick={() => navigateToPage("register")}>Register</button>}
          {user && <button onClick={() => navigateToPage("profile")}>Profile</button>}
          <button onClick={() => navigateToPage("jobs")}>Jobs</button>
          <button onClick={toggleTheme} className="theme-toggle-button">
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Pages */}
      <div className="page-content">
        {page === "login" && <Login setUser={setUser} setPage={setPage} />}
        {page === "register" && <Register setPage={setPage} />}
        {page === "jobs" && <JobList setUser={setUser} user={user} />}
        {page === "profile" && user && <Profile user={user} handleLogout={handleLogout} setUser={setUser} />} {/* Render Profile component */}
        {page === "logout" && <div>Logging out...</div>}
      </div>
    </div>
  );
}

export default App;