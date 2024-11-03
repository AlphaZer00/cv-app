export default function Experience() {
    return (
        <>
            <div className="ex-position">
                <label htmlFor="position">Position</label>
                <input type="text" id="position"></input>
            </div>
            <div className="ex-company">
                <label htmlFor="company">Company</label>
                <input type="text" id="company"></input>
            </div>
            <div className="ex-start-date">
                <label htmlFor="experienceStartDate">Start Date</label>
                <input type="date" id="experienceStartDate"></input>
            </div>
            <div className="ex-end-date">
                <label htmlFor="experienceEndDate">End Date</label>
                <input type="date" id="experienceEndDate"></input>
            </div>
        </>
    )

}