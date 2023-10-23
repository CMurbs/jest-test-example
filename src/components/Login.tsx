import React, { useState } from "react";
import { mockUserData } from "../data";
import { useNavigate } from "react-router";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (checkValidEmail(email)) {
      const isAuthenticated = mockUserData.some(
        (users) => users.email === email && users.password === password
      );

      if (isAuthenticated) {
        navigate({
          pathname: "/profile",
          search: `?email=${email}`
        });
      } else {
        alert("Incorrect Email Password Combo");
      }
    } else {
      alert("Invalid Email");
    }
  };

  const checkValidEmail = (email: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} data-testid="email-input" />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            data-testid="password-input"
          />
        </div>
        <button type="button" onClick={handleLogin} data-testid='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
