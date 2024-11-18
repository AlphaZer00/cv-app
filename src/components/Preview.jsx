export default function Preview({ generalInfo, experience, education }) {
    return (
        <div className="cv-preview">
            <div className="preview-general-info">
                {generalInfo.length > 0 && (
                    <div className="general-info-entry">
                        <p>{generalInfo[0].name}</p>
                        <p>{generalInfo[0].email}</p>
                        <p>{generalInfo[0].phone}</p>
                    </div>
                )}
            </div>

            <div className="preview-education">
                <h3>Education</h3>
                {education.length > 0 && (
                    <div className="preview-education-entry">
                        <p>{education[0].schoolName}</p>
                        <p>{education[0].major}</p>
                        <p>Graduation Date: {education[0].graduationDate}</p>
                    </div>
                )}
            </div>

            <div className="preview-experience">
                <h2>Experience</h2>
                {experience.length === 0 ? (
                    <p>No experience added yet.</p>
                ) : (
                    experience.map((item, index) => (
                        <div key={index} className="experience-item">
                            <h3>
                                {item.positionTitle} at {item.companyName}
                            </h3>
                            <p>
                                <strong>Responsibilities:</strong>{" "}
                                {item.responsibilities}
                            </p>
                            <p>
                                {item.dateFrom} - {item.dateUntil}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
