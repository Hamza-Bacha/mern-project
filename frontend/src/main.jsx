import React, { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add validation here
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        alert(data.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" onChange={handleChange} placeholder="First Name" required />
            <input name="lastName" onChange={handleChange} placeholder="Last Name" required />
            <input name="email" onChange={handleChange} placeholder="Email" required />
            <input name="phone" onChange={handleChange} placeholder="Phone" required />
            <input name="dob" onChange={handleChange} placeholder="Date of Birth" required />
            <textarea name="address" onChange={handleChange} placeholder="Address" required></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;
