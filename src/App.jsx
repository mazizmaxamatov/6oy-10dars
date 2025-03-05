import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

const isAuthenticated = () => !!localStorage.getItem("accessToken");

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/add" element={<ProtectedRoute><Add /></ProtectedRoute>} />
                <Route path="/edit" element={<ProtectedRoute><Edit /></ProtectedRoute>} />
            </Routes>
        </>
    );
};

export default App;
