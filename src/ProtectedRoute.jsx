import React from "react";
import auth from "../firebase.iinits.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

import LoadingPage from "./LoadingPage";

function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LoadingPage />;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
