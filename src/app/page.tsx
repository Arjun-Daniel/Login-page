'use client';

import { useState } from 'react';
import Link from 'next/link';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

const clearErrorMessage = () => {
  setErrorMessage("");
};

const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();

  const storedUser = localStorage.getItem(email);
    if (!storedUser) {
      setErrorMessage("Email ID not detected. Please try again.");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    if (parsedUser.password !== password) {
      setErrorMessage("Invalid password, please try again.");
    } else {
      setSuccessMessage("Successfully Signed In!");
      setErrorMessage("");

      setEmail("");
      setPassword("");
    }
  };  

  return (
    <main className = "bg-white min-h-screen">
      <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-80 px-4 sm:px-0">
        <aside className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg bg-opacity-60 shadow-lg shadow-orange-500">
        <h1 className="text-center text-2xl sm:text-3xl font-bold bg-orange-500 text-black rounded-t-lg m-0 py-3 sm:py-4">Sign In</h1>
          <form onSubmit={handleLogin} className="p-6 sm:p-8">
            <input type="email" name="" placeholder="Email id" value={email} onFocus={clearErrorMessage} onChange={(e) => setEmail(e.target.value)} className="py-2 px-3 w-full text-black text-lg font-light outline-none border border-black "/>
            <input type="password" name="" placeholder="Password" value={password} onFocus={clearErrorMessage} onChange={(e) => setPassword(e.target.value)} className="py-2 px-3 w-full text-black text-lg font-light outline-none border border-black mt-4 sm:mt-5" />
            {errorMessage && <p className="text-white text-center mt-3 border border-red-600 bg-red-700 rounded-lg font-bold m-0 py-3 sm:py-4">{errorMessage}</p>}
            {successMessage && <p className="text-white text-center mt-3 border border-red-600 bg-blue-600 rounded-lg font-bold m-0 py-3 sm:py-4">{successMessage}</p>}
              <div className="flex justify-between items-center mt-4 sm:mt-5">
                <Link href="/signup" className="text-black cursor-pointer transition hover:text-orange-600">Create an account</Link>
                <button type="submit" className="py-2 px-4 sm:px-8 bg-black text-white rounded-lg transition hover:bg-orange-600">Sign In</button>
              </div>
          </form>
        </aside>
      </div>
    </main>
  );
};


export default LoginForm;