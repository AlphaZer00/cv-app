export default function Education() {
    return (
        <>
            <div className="ed-name">
                <label htmlFor="educationName">School Name</label>
                <input type="text" id="educationName"></input>
            </div>
            <div className="ed-major">
                <label htmlFor="educationMajor">Major/Program</label>
                <input type="text" id="educationMajor"></input>
            </div>
            <div className="ed-date">
                <label htmlFor="educationDate">Graduation Date</label>
                <input type="text" id="educationDate"></input>
            </div>
        </>
    )
}