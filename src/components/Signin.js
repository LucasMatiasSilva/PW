import React from "react";
import { useAuth } from "../store/Auth";

export default function SigninForm() {
  const { signin } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSignin(e, email, password) {
    e.preventDefault();
    signin(email, password);
  }

  return (
    <div>
      <h3>Login</h3>
      <form>
        <div className="input-group">
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            autoComplete="email"
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" onClick={e => handleSignin(e, email, password)}>
          Login
        </button>
      </form>
    </div>
  );
}
