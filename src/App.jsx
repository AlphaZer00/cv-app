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
    const [education, setEducation] = useState([
        { schoolName: "", major: "", graduationDate: "" },
    ]);
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
            <Education
                education={education}
                setEducation={setEducation}
            ></Education>
            <Experience
                experience={experience}
                setExperience={setExperience}
            ></Experience>
            <Preview experience={experience} education={education}></Preview>
        </>
    );
}

export default App;
