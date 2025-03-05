import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear(); 
        navigate("/"); 
    }, [navigate]);

    return <h1 className="p-6">Siz Home sahifasiga yo‘naltirilmoqdasiz...</h1>;
};

export default Add;
