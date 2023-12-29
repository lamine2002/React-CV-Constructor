import {useState} from "react";
import Input from "./Input.jsx";

export default function AddExperienceForm ({handleAddExperience, setShowAddExperienceForm}) {
    const [newTitle, setNewTitle] = useState('');
    const [newDate, setNewDate] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = Math.floor(Math.random() * 10000) + 1;
        handleAddExperience({id,title: newTitle, date: newDate, description: newDescription});
        setShowAddExperienceForm(false);
        setNewTitle('');
        setNewDate('');
        setNewDescription('');

        // console.log(newTitle, newDate, newDescription);
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'addTitle':
                setNewTitle(value);
                break;
            case 'addDate':
                setNewDate(value);
                break;
            case 'addDescription':
                setNewDescription(value);
                break;
            default:
                break;
        }
    }

    return (
        <div className="add-experience-form-container" key={'addExperience'}>
            <h3 className="add-experience-form-title">Ajouter une expérience professionnelle</h3>
            <form onSubmit={handleSubmit}>
                <Input labelName="Titre" value={newTitle} attribute="addTitle" onChange={onChange} />
                <Input labelName="Date" value={newDate} attribute="addDate" onChange={onChange} />
                <Input labelName="Description" value={newDescription} attribute="addDescription" onChange={onChange} type={"textarea"} />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}