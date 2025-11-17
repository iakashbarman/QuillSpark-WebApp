import React from "react";
import { useLocation } from "react-router-dom";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

/* Clerk Appearance */
const clerkAppearance = {
  baseTheme: "dark",
  variables: {
    colorPrimary: "#6c5cff",
    colorPrimaryText: "#ffffff",
    colorText: "#eae9ff",
    colorBackground: "#12061a",
    colorInputBackground: "rgba(255,255,255,0.02)",
    colorInputText: "#eae9ff",
  },
};

export default function Auth() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const mode = (params.get("mode") || "sign-in").toLowerCase();

  //Redirect after successful auth
  const redirectUrl = "/dashboard";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b1030] via-[#241033] to-[#5b49f0] text-gray-100">
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left welcome card */}
          <div className="max-w-md mx-auto">
            <div className="rounded-2xl frosted p-12 border-[rgba(255,255,255,0.03)] shadow-inner">
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#b892ff] to-[#7b5bff] mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>

                <div className="mt-6">
                  <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#6c5cff] to-[#9a6bff] text-white font-semibold shadow-md">
                    Welcome to QUILLSPARK! 👋
                  </button>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#b892ff] text-center mt-8">
              Welcome Back!
            </h2>
            <p className="text-center text-indigo-200 mt-3 max-w-sm mx-auto">
              To keep connected verify yourself with your personal info
            </p>
          </div>

          {/* Right card: embed Clerk SignIn / SignUp widget */}
          <div className="max-w-md mx-auto">
            <div className="rounded-2xl frosted p-8 border-[rgba(255,255,255,0.03)] shadow-inner flex flex-col justify-center items-center">
              {/* <div className="text-2xl font-bold text-white text-center mb-4">
                {mode === "sign-up" ? "Create an Account!" : "Sign In"}
              </div> */}

              <SignedOut>
                {mode === "sign-up" ? (
                  <SignUp
                    // path="/auth"
                    // routing="path"
                    signInUrl="/auth?mode=sign-in"
                    signUpForceRedirectUrl={redirectUrl}
                    appearance={clerkAppearance}
                  />
                ) : (
                  <SignIn
                    // path="/auth"
                    // routing="path"
                    signUpUrl="/auth?mode=sign-up"
                    signInForceRedirectUrl={redirectUrl}
                    appearance={clerkAppearance}
                  />
                )}
              </SignedOut>

              <SignedIn>
                <div className="text-sm text-indigo-200 text-center">
                  You are already signed in. Redirecting to your Dashboard...
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
