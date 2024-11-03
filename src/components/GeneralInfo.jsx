export default function GeneralInfo() {
    return (
        <>
            <div className="gi-name">
                <label htmlFor="name">Name</label>
                <input type="text" id="name"></input>
            </div>
            <div className="gi-email">
                <label htmlFor="email">Email</label>
                <input type="email" id="email"></input>
            </div>
            <div className="gi-phone">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone"></input>
            </div>
        </>
    )
}