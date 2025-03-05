import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear(); 
        navigate("/login"); 
    }, [navigate]);

    return <h1 className="p-6">Login sahifasiga yo‘naltirilmoqdasiz...</h1>;
};

export default Edit;
