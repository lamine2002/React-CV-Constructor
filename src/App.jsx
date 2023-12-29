import { useState } from 'react'
import "./styles/app.css"
import "./styles/resume.css"
import Resume from "./components/Resume.jsx";
import EditSide from "./components/EditSide.jsx";
import html2pdf from "html2pdf.js";
function App() {
    const [person, setPerson] = useState({
        name: 'John Doe',
        mail: 'niangmohamedlamine3@gmail.com',
        tel: '+221 77 686 11 76',
        address: 'Dakar, Senegal',
    });

    const [experiences, setExperiences] = useState([
        {
            id: 1,
            title: 'Développeur web',
            date: '2020 - 2021',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptates.',
        },
        {
            id: 2,
            title: 'Analyste programmeur',
            date: '2021 - 2022',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptates.',
        },
        {
            id: 3,
            title: 'Ingénieur logiciel',
            date: '2022 - 2022',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptates.',
        },
    ]);

    const [educations, setEducations] = useState([
        {
            id: 1,
            degree: 'Développeur web',
            date: '2021 - 2021',
            school: 'Ecole 1',
            location: 'Dakar, Senegal',
        },
        {
            id: 2,
            degree: 'Développeur web',
            date: '2022 - 2023',
            school: 'Ecole 2',
            location: 'Dakar, Senegal',
        },
        {
            id: 3,
            degree: 'Développeur web',
            date: '2023 - 2024',
            school: 'Ecole 3',
            location: 'Dakar, Senegal',
        },
    ]);

    const [skills, setSkills] = useState([
        'HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'MongoDB', 'MySQL', 'PHP', 'Laravel', 'Symfony'
    ]);






  return (
      <div>
          <div className="app">

              <EditSide
                  person={person}
                  setPerson={setPerson}
                  experiences={experiences}
                  setExperiences={setExperiences}
                  educations={educations}
                  setEducations={setEducations}
                  skills={skills}
                  setSkills={setSkills}
              />

              <Resume
                  person={person}
                  experiences={experiences}
                  educations={educations}
                  skills={skills}
              />

          </div>
      </div>

  )
}

export default App
