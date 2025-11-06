import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Auth from "./pages/Auth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/*" element={<Auth />} />
    </Routes>
  );
}