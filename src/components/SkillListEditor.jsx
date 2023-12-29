
export default function SkillListEditor({skills, setSkills}) {

    const handleDelete = (skill) => {
        setSkills(skills.filter((s) => s !== skill));
    }

    return (
        <div className="skill-list-editor">

            <div className="skill-list-editor-add">
                <input
                    type="text"
                    placeholder="Ajouter une compétence"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setSkills([...skills, e.target.value]);
                            e.target.value = '';
                        }
                    }}
                />
            </div>

            <div className="list-skill-to-delete">
                {skills.map((skill) => (
                    <div className="skill-to-edit">
                            <div>{skill}</div>
                            <button onClick={() => handleDelete(skill)}>X</button>
                    </div>

                ))}
            </div>

        </div>
    )
}