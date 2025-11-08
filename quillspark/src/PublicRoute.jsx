import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const { isSignedIn } = useAuth();

  // If the user is signed in, redirect to the /dashboard page
  if (isSignedIn) {
    return <Navigate to="/dashboard" />;
  }

  // If the user is not signed in, render the children (public content)
  return children;
}