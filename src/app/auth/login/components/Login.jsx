import React from "react";
import LoginForm from "./LoginForm.jsx";

export default function Login() {
  return (
    <div>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            NEXT AUTH
          </h2>
          <h2 className="text-2xl leading-9 tracking-tight text-center text-gray-900 ">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
