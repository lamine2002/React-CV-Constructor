import { useState } from "react";
import Input from "./Input.jsx";

export default function AddFormationForm({ handleAddEducation, setShowAddEducationForm }) {
    const [degree, setDegree] = useState('');
    const [date, setDate] = useState('');
    const [school, setSchool] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = Math.floor(Math.random() * 10000) + 1;
        handleAddEducation({ id, degree, date, school, location });
        setShowAddEducationForm(false);

        // Réinitialiser les champs après la soumission
        setDegree('');
        setDate('');
        setSchool('');
        setLocation('');
    }

    return (
        <div className="add-formation-form-container">
            <form onSubmit={handleSubmit}>
                <Input
                    labelName="Diplôme"
                    attribute="degree"
                    value={degree}
                    onChange={(event) => setDegree(event.target.value)}
                />
                <Input
                    labelName="Date"
                    attribute="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
                <Input
                    labelName="Ecole"
                    attribute="school"
                    value={school}
                    onChange={(event) => setSchool(event.target.value)}
                />
                <Input
                    labelName="Lieu"
                    attribute="location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}
