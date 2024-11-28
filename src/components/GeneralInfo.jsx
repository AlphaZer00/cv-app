import { useState } from "react";
import "../styles/shared.css";

export default function GeneralInfo({ generalInfo, setGeneralInfo }) {
    // Set default state of isEditing to true, this controls conditional rendering of edit and view modes
    const [isEditing, setIsEditing] = useState(true);

    // Handler function that updates state when any change is made to input values
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the general info entry
        const updatedGeneralInfo = { ...generalInfo[0], [name]: value };

        // Update state with new general info
        setGeneralInfo([updatedGeneralInfo]);
    };

    // onClick function for submit button
    const handleSubmit = () => setIsEditing(false);
    // onClick function for edit button
    const handleEdit = () => setIsEditing(true);

    return (
        <div className="general-info-section">
            <h3>General Information</h3>
            {/* If editing mode is ON for this section, render the form */}
            {isEditing ? (
                <div
                    className={`general-info-form ${isEditing ? "active" : ""}`}
                >
                    <div className="gi-name">
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={generalInfo[0]?.name || ""}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="gi-email">
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={generalInfo[0]?.email || ""}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="gi-phone">
                        <label htmlFor="phone">Phone Number: </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={generalInfo[0]?.phone || ""}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <button type="button" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            ) : (
                // If view mode is on, hide the form fields and only display the values
                <div
                    className={`general-info-display display-mode ${
                        !isEditing ? "active" : ""
                    }`}
                >
                    <p>Name: {generalInfo[0].name}</p>
                    <p>Email: {generalInfo[0].email}</p>
                    <p>Phone: {generalInfo[0].phone}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}
