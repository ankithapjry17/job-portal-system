import { useState } from "react";
import API from "./services/api";
import './Form.css'; // Import the new CSS file

function Login({ setUser, setPage }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/login", form);

    console.log("Login response:", res.data);
    console.log("User data from login:", res.data.user); // Add this line

    // Store user properly
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user); // Update global user state

    alert("Login successful");
    setPage("jobs"); // Navigate to jobs page
  } catch (err) {
    console.log(err);
    alert("Invalid credentials");
  }
};

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="form-button">Login</button>
      </form>
    </div>
  );
}

export default Login;