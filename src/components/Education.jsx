import { useState } from "react";

export default function Education({ education, setEducation }) {
    // Set default state of isEditing to true, this controls conditional rendering of edit and view modes
    const [isEditing, setIsEditing] = useState(true);

    // Handler function that updates state when any change is made to input values
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the single education entry
        const updatedEducation = { ...education[0], [name]: value };

        // Update state with new education data
        setEducation([updatedEducation]);
    };

    // onClick function for submit button
    const handleSubmit = () => setIsEditing(false);
    // onClick function for edit button
    const handleEdit = () => setIsEditing(true);

    return (
        <div className="education-section">
            <h3>Education</h3>
            {/* If editing mode is ON for this section, render the form */}
            {isEditing ? (
                <div className="education-form">
                    <div className="ed-name">
                        <label htmlFor="educationName">School Name: </label>
                        <input
                            type="text"
                            id="educationName"
                            name="schoolName"
                            value={education[0]?.schoolName || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ed-major">
                        <label htmlFor="educationMajor">Major/Program: </label>
                        <input
                            type="text"
                            id="educationMajor"
                            name="major"
                            value={education[0]?.major || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ed-date">
                        <label htmlFor="educationDate">Graduation Date: </label>
                        <input
                            type="text"
                            id="educationDate"
                            name="graduationDate"
                            value={education[0]?.graduationDate || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
                // If view mode is on, hide the form fields and only display the values
                <div className="education-display">
                    <p>School: {education[0].schoolName}</p>
                    <p>Major: {education[0].major}</p>
                    <p>Graduation Date: {education[0].graduationDate}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}
