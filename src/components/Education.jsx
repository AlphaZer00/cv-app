export default function Education({ education, setEducation }) {
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the single education entry
        const updatedEducation = { ...education[0], [name]: value };

        // Update state with new education data
        setEducation([updatedEducation]);
    };

    return (
        <div className="education-form">
            <h3>Education</h3>
            <div className="ed-name">
                <label htmlFor="educationName">School Name</label>
                <input
                    type="text"
                    id="educationName"
                    name="schoolName"
                    value={education[0]?.schoolName || ""}
                    onChange={handleChange}
                />
            </div>
            <div className="ed-major">
                <label htmlFor="educationMajor">Major/Program</label>
                <input
                    type="text"
                    id="educationMajor"
                    name="major"
                    value={education[0]?.major || ""}
                    onChange={handleChange}
                />
            </div>
            <div className="ed-date">
                <label htmlFor="educationDate">Graduation Date</label>
                <input
                    type="text"
                    id="educationDate"
                    name="graduationDate"
                    value={education[0]?.graduationDate || ""}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
