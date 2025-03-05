import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
    
        if (!formData.username || !formData.email || !formData.password) {
            setError("Barcha maydonlarni to‘ldiring!");
            return;
        }
    
        try {
            const response = await axios.post(
                "https://api.ashyo.fullstackdev.uz/auth/register",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
    
            console.log("✅ Muvaffaqiyatli ro‘yxatdan o‘tildi:", response.data);
            alert("Ro‘yxatdan o‘tish muvaffaqiyatli!");
        } catch (err) {
            console.error("❌ Xatolik tafsilotlari:", err.response);
            setError(err.response?.data?.message || "API bilan bog‘liq xatolik yuz berdi!");
        }
    };
    

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Ro‘yxatdan o‘tish</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="border w-full p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border w-full p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Parol</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Parol"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="border w-full p-2 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600"
                    >
                        Ro‘yxatdan o‘tish
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
