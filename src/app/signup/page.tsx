'use client';

import { useState } from "react";
import Link from "next/link";

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


    const clearErrorMessage = () => {
        setErrorMessage("");
    }

    const emailIsValid = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const passwordIsValid = (password: string) => {
        return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);
    };

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();

        if (!fullName || !email || !password || !confirmPassword) {
            setErrorMessage("Please ensure all fields are filled out.");
            return;
        }
        if (!emailIsValid(email)) {
            setErrorMessage("The Email format you entered is not valid.");
            return;
        }
        if (!passwordIsValid(password)) {
            setErrorMessage("Password must be at least 8 characters long, contain an uppercase letter, and a number.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("The passwords you provided are not the same.");
            return;
        }

        localStorage.setItem(email, JSON.stringify({ fullName, email, password }));
        setSuccessMessage("Account created successfully!");
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    };
    
    return (
        <main className = "bg-white min-h-screen">
            <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-80 px-4 sm:px-0">
                <aside className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg bg-opacity-60 shadow-lg shadow-orange-500">
                <h1 className="text-center text-2xl sm:text-3xl font-bold bg-orange-500 text-black rounded-t-lg m-0 py-4">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="p-6 sm:p-8">
                        <input type=" text" name="" placeholder="Full Name" value={fullName} onFocus={clearErrorMessage} onChange={(e) => setFullName(e.target.value)} className="py-2 px-3 w-full text-black text-lg font-light outline-none border border-black"/>
                        <input type=" text" name="" placeholder="New Email Id" value={email} onFocus={clearErrorMessage} onChange={(e) => setEmail(e.target.value)} className="py-2 px-3 w-full text-black text-lg font-light outline-none border border-black mt-4 sm:mt-5"/>
                        <input type="text" name="" placeholder="New Password" value={password} onFocus={clearErrorMessage} onChange={(e) => setPassword(e.target.value)} className="py-2 px-3 w-full text-black text-lg font-light outline-none border border-black mt-4 sm:mt-5" />
                        <input type="text" name="" placeholder="Confirm Password" value={confirmPassword} onFocus={clearErrorMessage} onChange={(e) => setConfirmPassword(e.target.value)} className="py-2 px-3 w-full text-black text-lg font-light outline-none border border-black mt-4 sm:mt-5" />
                        {errorMessage && <p className="text-white text-center mt-3 border border-red-600 bg-red-700 rounded-lg font-bold m-0 py-3 sm:py-4">{errorMessage}</p>}
                        {successMessage && <p className="text-white text-center mt-3 border border-red-600 bg-blue-600 rounded-lg font-bold m-0 py-3 sm:py-4">{successMessage}</p>}
                        <div className="flex justify-between items-center mt-4 sm:mt-5">
                            <Link href="/" className="text-black cursor-pointer transition hover:text-orange-700">Already have an account?</Link>
                            <button type="submit" className="py-2 px-4 sm:px-8 bg-black text-white rounded-lg transition hover:bg-orange-600">Sign Up</button>
                        </div>
                    </form>
                </aside>
            </div>
        </main>
    );
};

export default SignUp;