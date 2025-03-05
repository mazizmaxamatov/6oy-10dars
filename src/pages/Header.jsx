import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Header = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("accessToken"); 
    const isLoggedIn = localStorage.getItem("isLoggedIn"); 

    const handleProfileClick = () => {
        if (!isLoggedIn) {
            alert("Profil sahifasiga kirish uchun avval login qilishingiz kerak!");
            navigate("/login");
        } else {
            navigate("/profile"); 
        }
    };

    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <div>
                <Link to="/" className="text-xl font-bold">MMM</Link>
            </div>
            <div className="space-x-4">
                <Link to="/">
                    <Button type="link" className="text-white">Home</Button>
                </Link>
                {!isAuthenticated ? (
                    <>
                        <Link to="/login">
                            <Button type="link" className="text-white">Login</Button>
                        </Link>
                        <Link to="/register">
                            <Button type="link" className="text-white">Register</Button>
                        </Link>
                    </>
                ) : null}

              
                <Button type="link" className="text-white" onClick={handleProfileClick}>
                    Profile
                </Button>
            </div>
        </nav>
    );
};

export default Header;
