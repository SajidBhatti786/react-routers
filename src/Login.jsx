import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message || "";
  const path = location.state?.from || "/host";
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    try {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password: password,
          expiresInMins: 5,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Invalid credentials") {
            setError(data.message);
            setSubmitting(false);
          } else {
            setError(null);
            console.log("data is", data);
            setSubmitting(false);

            localStorage.setItem("loggedIn", true);
            const jsonString = JSON.stringify(data);

            // Store the JSON string in localStorage under the key "userData" (you can use any key you prefer)
            localStorage.setItem("userData", jsonString);
            navigate(path, { replace: true });

            console.log("submitted");
          }
        })
        .catch((err) => {
          setSubmitting(false);
          setError(err);
          console.log("err is: " + err.message);
        });
    } catch (err) {
      setSubmitting(false);
      setError(err);
      console.log("err is: " + err.message);
    }
  }

  return (
    <div className="container">
      <h2>Login</h2>
      {submitting && <h1>submitting</h1>}
      {error === "Invalid credentials" ? (
        <h3>Incorrect username or password. Try Again!</h3>
      ) : (
        <h2>{message}</h2>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your email"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
