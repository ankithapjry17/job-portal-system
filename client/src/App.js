import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import JobList from "./JobList";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
        <h2>Job Portal 💼</h2>

        <div>
          <button onClick={() => setPage("login")}>Login</button>
          <button onClick={() => setPage("register")}>Register</button>
          <button onClick={() => setPage("jobs")}>Jobs</button>
        </div>
      </nav>

      {/* Pages */}
      <div style={{ padding: "20px" }}>
        {page === "login" && <Login />}
        {page === "register" && <Register />}
        {page === "jobs" && <JobList />}
      </div>
    </div>
  );
}

export default App;