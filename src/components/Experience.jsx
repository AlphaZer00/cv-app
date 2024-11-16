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
                    <div className="ex-company">
                        <label htmlFor={`companyName-${index}`}>
                            Company Name
                        </label>
                        <input
                            type="text"
                            id={`companyName-${index}`}
                            name="companyName"
                            value={item.companyName}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>

                    <div className="ex-position">
                        <label htmlFor={`positionTitle-${index}`}>
                            Position Title
                        </label>
                        <input
                            type="text"
                            id={`positionTitle-${index}`}
                            name="positionTitle"
                            value={item.positionTitle}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>

                    <div className="ex-responsibilities">
                        <label htmlFor={`responsibilities-${index}`}>
                            Responsibilities
                        </label>
                        <textarea
                            id={`responsibilities-${index}`}
                            name="responsibilities"
                            value={item.responsibilities}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>

                    <div className="ex-date-from">
                        <label htmlFor={`dateFrom-${index}`}>Start Date</label>
                        <input
                            type="text"
                            id={`dateFrom-${index}`}
                            name="dateFrom"
                            value={item.dateFrom}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>

                    <div className="ex-date-until">
                        <label htmlFor={`dateUntil-${index}`}>End Date</label>
                        <input
                            type="text"
                            id={`dateUntil-${index}`}
                            name="dateUntil"
                            value={item.dateUntil}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>
                </div>
            ))}

            <button onClick={handleAddExperience}>
                Add Another Experience
            </button>
        </div>
    );
}
