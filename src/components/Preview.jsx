export default function Preview({ generalInfo, experience, education }) {
    return (
        <div className="cv-preview">
            {/* General Info */}
            {generalInfo.length > 0 && (
                <div className="preview-general-info">
                    <h1 className="name">{generalInfo[0].name}</h1>
                    <p className="contact-info">
                        {generalInfo[0].email} | {generalInfo[0].phone}
                    </p>
                </div>
            )}

            {/* Education Section */}
            <div className="preview-education">
                <h2>Education</h2>
                {education.length > 0 ? (
                    education.map((edu, index) => (
                        <div key={index} className="preview-education-entry">
                            <h3>{edu.schoolName}</h3>
                            <p>
                                {edu.major} <span>Graduation: {edu.graduationDate}</span>
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No education added yet.</p>
                )}
            </div>

            {/* Experience Section */}
            <div className="preview-experience">
                <h2>Experience</h2>
                {experience.length > 0 ? (
                    experience.map((exp, index) => (
                        <div key={index} className="preview-experience-entry">
                            <h3>
                                {exp.positionTitle}{" "}
                                <span>@ {exp.companyName}</span>
                            </h3>
                            <p className="date-range">
                                {exp.dateFrom} - {exp.dateUntil}
                            </p>
                            <p className="responsibilities">
                                {exp.responsibilities}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No experience added yet.</p>
                )}
            </div>
        </div>
    );
}
