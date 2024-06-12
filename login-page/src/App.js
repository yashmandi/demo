import './App.css';
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "110px" }}>
      <h6 style={{ marginBottom: "20px", fontSize: "20px" }}>Welcome Back! Login below!</h6>
      <div style={{ width: "450px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <br />
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            style={{ width: "100%", padding: "8px", margin: "8px 0", boxSizing: "border-box", borderRadius: "4px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="password">Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              style={{ width: "100%", padding: "8px", margin: "8px 0", boxSizing: "border-box", borderRadius: "4px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleClickShowPassword}
              style={{ position: "absolute", right: "10px", top: "10px", background: "none", border: "none" }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        {error && (
          <p style={{ color: "red" }}>{error}</p>
        )}
        <button
          style={{ width: "100%", padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Login
        </button>
        <p style={{ padding: "8px", marginTop: "8px" }}>
          New here?{" "}
          <a to="/signup" style={{ color: "#007BFF", textDecoration: "underline" }}>
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;