export default function Resume({person, experiences, educations, skills}) {
    return (
        <div className="resume-container">

            <div className="resume-header">
                <h1 className="person-name">
                    {person.name}
                </h1>
                <div className="person-infos">
                    {/* l'icon svg se trouvant dans ../asset/icon/icon-email.svg ici*/}
                    <div className="person-mail">
                            {person.mail}
                    </div>
                    <div className="person-tel">{person.tel}</div>
                    <div className="person-address">{person.address}</div>
                </div>
            </div>


            <div className="resume-content">

                <div className="resume-experiences">
                    <h2 className="resume-title">Expériences Professionnelles</h2>
                    {experiences.map((experience) => (
                        <div key={experience.id} className="resume-experience">
                            <div className="resume-experience-date">{experience.date}</div>

                            <div className="resume-experience-right">
                                <div className="resume-experience-title">{experience.title}</div>
                                <div className="resume-experience-description">{experience.description}</div>
                            </div>
                            <br/>
                        </div>
                    ))}
                </div>

                <div className="resume-educations">
                    <br/>
                    <h2 className="resume-title">Formations</h2>
                    {educations.map((education) => (
                        <div key={education.id} className="resume-education">
                            <div className="resume-education-left">
                                <div className="resume-education-date">{education.date}</div>
                                <div className="resume-education-location">{education.location}</div>
                            </div>
                            <div className="resume-education-right">
                                <div className="resume-education-school">{education.school}</div>
                                <div className="resume-education-title">{education.degree}</div>
                            </div>
                            <br/>
                        </div>
                    ))}
                </div>

                <div className="resume-skills">
                    <h2 className="resume-title">Compétences</h2>
                    <div className="resume-skills-list">
                        {skills.map((skill) => (
                            <div key={skill} className="resume-skill">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}