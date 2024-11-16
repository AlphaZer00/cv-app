import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([
        {
            companyName: "",
            positionTitle: "",
            responsibilities: "",
            dateFrom: "",
            dateUntil: "",
        },
    ]);

    return (
        <>
            <GeneralInfo></GeneralInfo>
            <Education></Education>
            <Experience
                experience={experience}
                setExperience={setExperience}
            ></Experience>
            <Preview experience={experience}></Preview>
        </>
    );
}

export default App;
