import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isSignedIn } = useAuth();

  // If the user is signed in, render the children (protected content)
  if (isSignedIn) {
    return children;
  }

  // If the user is not signed in, redirect to the /auth page
  return <Navigate to="/auth" />;
}