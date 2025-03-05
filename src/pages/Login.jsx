import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post("https://api.ashyo.fullstackdev.uz/auth/login", { email, password });
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/profile");
        } catch (error) {
            alert("Login xatolik!");
        }
    };

    return (
        <div className="p-6">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full" />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full" />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
            </form>
        </div>
    );
};

export default Login;
