import { useState } from "react";

export default function Experience({ experience, setExperience }) {
    // Handle changes in input fields
    const handleChange = (e, index) => {
        const { name, value } = e.target;

        const updatedExperience = experience.map((item, i) =>
            i === index ? { ...item, [name]: value } : item
        );

        setExperience(updatedExperience);
    };

    // Adds a new experience form field
    const handleAddExperience = () => {
        const newExperienceEntry = {
            companyName: "",
            positionTitle: "",
            responsibilities: "",
            dateFrom: "",
            dateUntil: "",
        };

        setExperience((prevExperience) => [
            ...prevExperience,
            newExperienceEntry,
        ]);
    };

    return (
        <div className="experience-form">
            <h3>Experience</h3>

            {experience.map((item, index) => (
                <div key={index} className="experience-entry">
                    <input
                        type="text"
                        name="companyName"
                        value={item.companyName}
                        placeholder="Company Name"
                        onChange={(e) => handleChange(e, index)}
                    />
                    <input
                        type="text"
                        name="positionTitle"
                        value={item.positionTitle}
                        placeholder="Position Title"
                        onChange={(e) => handleChange(e, index)}
                    />
                    <textarea
                        name="responsibilities"
                        value={item.responsibilities}
                        placeholder="Responsibilities"
                        onChange={(e) => handleChange(e, index)}
                    />
                    <input
                        type="date"
                        name="dateFrom"
                        value={item.dateFrom}
                        onChange={(e) => handleChange(e, index)}
                    />
                    <input
                        type="date"
                        name="dateUntil"
                        value={item.dateUntil}
                        onChange={(e) => handleChange(e, index)}
                    />
                </div>
            ))}

            <button onClick={handleAddExperience}> 
                Add Another Experience
            </button>
        </div>
    );
}
