import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  // export default function PrivateRoute(props) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={() => {
        return currentUser ? <Component {...rest} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}
