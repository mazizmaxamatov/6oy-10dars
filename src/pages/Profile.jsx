import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let navigate = useNavigate();

    function logout() {
        localStorage.clear();
        navigate("/");
    }

    function handleAdd() {
        localStorage.clear();
        navigate("/");
    }

    function handleEdit() {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Name: {user?.fullname}</h2>
            <h2 className="text-lg text-gray-600">Email: {user?.email}</h2>
            
            <div className="mt-4 space-x-4">
                <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
                <button onClick={handleEdit} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
                <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
            </div>
        </div>
    );
};

export default Profile;
