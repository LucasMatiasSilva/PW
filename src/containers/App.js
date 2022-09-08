import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSession } from "../store/Session";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

import Account from "./Account";

export default function App() {
  const { isLoggedIn, isLoading } = useSession();

  if (isLoading) {
    return <p>Loading user...</p>;
  }

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Switch>
          <Route exact path="/" component={Account} />
        </Switch>
      ) : (
        <>
          <Signin />
          <Signup />
        </>
      )}
    </BrowserRouter>
  );
}
