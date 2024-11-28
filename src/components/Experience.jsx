import { useState } from "react";
import Editor from "react-simple-wysiwyg";

export default function Experience({ experience, setExperience }) {
    const [isEditing, setIsEditing] = useState(experience.map(() => true)); // Array to track editing state for each experience

    // Handle changes in input fields
    const handleChange = (e, index) => {
        const { name, value } = e.target;

        const updatedExperience = experience.map((item, i) =>
            i === index ? { ...item, [name]: value } : item
        );

        setExperience(updatedExperience);
    };

    const handleSubmit = () => setIsEditing(false);
    const handleEdit = () => setIsEditing(true);

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

    const handleRemoveExperience = (index) => {
        const updatedExperience = experience.filter((_, i) => i !== index);
        setExperience(updatedExperience);
    };

    return (
        <div className="experience-section">
            <h3>Experience</h3>
            {isEditing ? (
                <div className="experience-form">
                    {experience.map((exp, index) => (
                        <div key={index} className="experience-entry">
                            <h4>Experience {index + 1}</h4>
                            <div className="ex-company">
                                <label htmlFor={`companyName-${index}`}>
                                    Company Name:{" "}
                                </label>
                                <input
                                    type="text"
                                    id={`companyName-${index}`}
                                    name="companyName"
                                    value={exp.companyName || ""}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="ex-position">
                                <label htmlFor={`positionTitle-${index}`}>
                                    Position Title:{" "}
                                </label>
                                <input
                                    type="text"
                                    id={`positionTitle-${index}`}
                                    name="positionTitle"
                                    value={exp.positionTitle || ""}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="ex-responsibilities">
                                <label htmlFor={`responsibilities-${index}`}>
                                    Responsibilities:{" "}
                                </label>
                                <Editor
                                    id={`responsibilities-${index}`}
                                    name="responsibilities"
                                    value={exp.responsibilities || ""}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="ex-date-from">
                                <label htmlFor={`dateFrom-${index}`}>
                                    From:{" "}
                                </label>
                                <input
                                    type="text"
                                    id={`dateFrom-${index}`}
                                    name="dateFrom"
                                    value={exp.dateFrom || ""}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="ex-date-until">
                                <label htmlFor={`dateUntil-${index}`}>
                                    Until:{" "}
                                </label>
                                <input
                                    type="text"
                                    id={`dateUntil-${index}`}
                                    name="dateUntil"
                                    value={exp.dateUntil || ""}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <button
                                type="button"
                                className="remove-ex-button"
                                onClick={() => handleRemoveExperience(index)}
                                disabled={experience.length === 1}
                            >
                                Remove Experience
                            </button>
                        </div>
                    ))}

                    <button type="button" onClick={handleAddExperience}>
                        Add Experience
                    </button>
                    <button type="button" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            ) : (
                <div className="experience-display display-mode">
                    {experience.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <h4>
                                {exp.positionTitle} at {exp.companyName}
                            </h4>
                            <p>
                                <strong>Responsibilities:</strong>{" "}
                                {exp.responsibilities}
                            </p>
                            <p>
                                {exp.dateFrom} - {exp.dateUntil}
                            </p>
                        </div>
                    ))}
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}
