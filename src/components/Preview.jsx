export default function Preview({experience}) {
    return (
        <div className="cv-preview">
        <h2>Experience Preview</h2>
  
        {experience.length === 0 ? (
          <p>No experience added yet.</p>
        ) : (
          experience.map((item, index) => (
            <div key={index} className="experience-item">
              <h3>{item.positionTitle} at {item.companyName}</h3>
              <p><strong>Responsibilities:</strong> {item.responsibilities}</p>
              <p>{item.dateFrom} - {item.dateUntil}</p>
            </div>
          ))
        )}
      </div>
    )
}