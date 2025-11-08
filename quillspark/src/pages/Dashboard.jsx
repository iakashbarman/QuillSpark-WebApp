import React from "react";
import { UserButton } from "@clerk/clerk-react";

export default function Dashboard() {
  return (
    <div>
      <h1>Hello there, Welcome to Dashboard</h1>
      <UserButton />
    </div>
  );
}
