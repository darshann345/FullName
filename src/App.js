import React, { useState } from "react";

const App = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (firstName.trim() === "" && lastName.trim() === "") {
            setFullName("");
            setFullName(`${firstName} ${lastName}`.trim());
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Full Name Display</h1>
                <label>First Name:</label>
                <input 
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <br />
                <label>Last Name:</label>
                <input 
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>

            {fullName && (
                <p>Full Name: {fullName}</p>
            )}
        </>
    );
};

export default App;
