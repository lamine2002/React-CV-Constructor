import PersonDetailsForm from "./PersonDetailsForm.jsx";
import EditItem from "./EditItem.jsx";
import SaveCV from "./SaveCV.jsx";
import SkillListEditor from "./SkillListEditor.jsx";

export default function EditSide({person,setPerson, experiences, setExperiences, educations, setEducations, skills, setSkills}) {
    return (
        <div className="edit-side">
            <h1 className=""> Panel de controle</h1>
            <SaveCV />

            <PersonDetailsForm person={person} setPerson={setPerson} />

            <h2 className="edit-side-title">Experiences Professionnelles</h2>
            <EditItem
                items={experiences}
                objectName="experience"
                setItems={setExperiences}
                titleKey="title"
                dateKey="date"
                descriptionKey="description"
            />

            <h2 className="edit-side-title">Formations</h2>
            <EditItem
                items={educations}
                objectName="formation"
                setItems={setEducations}
                titleKey="degree"
                dateKey="date"
                descriptionKey="school"
            />

            <h2 className="edit-side-title">Compétences</h2>
            <SkillListEditor skills={skills} setSkills={setSkills} />

        </div>
    )
}