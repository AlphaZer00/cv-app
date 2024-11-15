import { useState } from "react";

export default function Experience({ experience, setExperience }) {
    const [newExperience, setNewExperience] = useState({
        companyName: "",
        positionTitle: "",
        responsibilities: "",
        dateFrom: "",
        dateUntil: "",
    });

    const handleAddExperience = () => {
        setExperience((prevExperience) => [...prevExperience, newExperience]);

        setNewExperience({
            companyName: "",
            positionTitle: "",
            responsibilities: "",
            dateFrom: "",
            dateUntil: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewExperience((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="experience-form">
            <div className="ex-position">
                <label htmlFor="position">Position</label>
                <input
                    type="text"
                    id="position"
                    name="positionTitle"
                    value={newExperience.positionTitle}
                    onChange={handleChange}
                />
            </div>

            <div className="ex-company">
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    id="company"
                    name="companyName"
                    value={newExperience.companyName}
                    onChange={handleChange}
                />
            </div>

            <div className="ex-responsibilities">
                <label htmlFor="responsibilities">Responsibilities</label>
                <textarea
                    id="responsibilities"
                    name="responsibilities"
                    value={newExperience.responsibilities}
                    onChange={handleChange}
                />
            </div>

            <div className="ex-start-date">
                <label htmlFor="experienceStartDate">Start Date</label>
                <input
                    type="date"
                    id="experienceStartDate"
                    name="dateFrom"
                    value={newExperience.dateFrom}
                    onChange={handleChange}
                />
            </div>

            <div className="ex-end-date">
                <label htmlFor="experienceEndDate">End Date</label>
                <input
                    type="date"
                    id="experienceEndDate"
                    name="dateUntil"
                    value={newExperience.dateUntil}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
