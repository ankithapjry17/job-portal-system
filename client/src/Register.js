import { useState } from "react";
import API from "./services/api";
import './Form.css'; // Import the new CSS file

function Register({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/register", form);
    console.log("Register response:", res.data); // Add this line
    alert(res.data.message);
    setPage("jobs"); // Navigate to jobs page after successful registration
  } catch (err) {
    console.log(err);
    alert(err.response?.data?.message || "Error registering user");
  }
};

  return (
    <div className="form-container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            required
          />
        </div>

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

        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
}

export default Register;