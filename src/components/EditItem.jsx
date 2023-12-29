import Input from "./Input.jsx";
import { useState } from "react";
import AddExperienceForm from "./AddExperienceForm.jsx";
import AddFormationForm from "./AddFormationForm.jsx";

function EditItem({ items, setItems, titleKey, dateKey, descriptionKey, objectName }) {
    const [show, setShow] = useState(false);
    const [idItem, setIdItem] = useState(null);
    const [showAddExperienceForm, setShowAddExperienceForm] = useState(false);
    const [showAddEducationForm, setShowAddEducationForm] = useState(false);

    const handleAddExperience = (newExperience) => {
        setItems([...items, newExperience]);
        setShowAddExperienceForm(false);
    };

    const handleAddEducation = (newEducation) => {
        setItems([...items, newEducation]);
        setShowAddEducationForm(false);
    };

    const handleShowAddExperienceForm = () => {
        setShowAddExperienceForm(!showAddExperienceForm);
        // Assurez-vous que showAddEducationForm est défini sur false lorsque vous basculez vers le formulaire d'expérience.
        setShowAddEducationForm(false);
    };

    const handleShowAddEducationForm = () => {
        setShowAddEducationForm(!showAddEducationForm);
        // Assurez-vous que showAddExperienceForm est défini sur false lorsque vous basculez vers le formulaire d'éducation.
        setShowAddExperienceForm(false);
    };

    const showItem = (id) => {
        setShow(!show);
        setIdItem(id);
    };

    const onChange = (event, id) => {
        const { name, value } = event.target;
        setItems((prevItems) => {
            return prevItems.map((item) =>
                item.id === id ? { ...item, [name]: value } : item
            );
        });
    };

    const handleDelete = (id) => {
        setItems((prevItems) => {
            return prevItems.filter((item) => item.id !== id);
        });
    };

    return (
        <div className="edit-items-container">
            {objectName === "experience" && (
                <div>
                    <button onClick={handleShowAddExperienceForm}>Ajouter une {objectName}</button>
                    <div className={showAddExperienceForm ? "show" : "hide"}>
                        <AddExperienceForm
                            handleAddExperience={handleAddExperience}
                            setShowAddExperienceForm={setShowAddExperienceForm}
                        />
                    </div>
                </div>
            )}

            {objectName === "formation" && (
                <div>
                    <button onClick={handleShowAddEducationForm}>Ajouter une {objectName}</button>
                    <div className={showAddEducationForm ? "show" : "hide"}>
                        <AddFormationForm
                            handleAddEducation={handleAddEducation}
                            setShowAddEducationForm={setShowAddEducationForm}
                        />
                    </div>
                </div>
            )}

            <div className={!showAddExperienceForm && !showAddEducationForm ? "edit-items-container show" : "edit-items-container hide"}>
                {items.map((item) => (
                    <div key={item.id} className="edit-item">
                        <div className="edit-item-title">
                            <h3>{item[titleKey]}</h3>
                            <button onClick={() => showItem(item.id)}>
                                {idItem === item.id && show ? "-" : "+"}
                            </button>
                            <button onClick={() => handleDelete(item.id)}>Supprimer</button>
                        </div>

                        <div className={idItem === item.id && show ? "show" : "hide"}>
                            <Input labelName="Title" object={item} attribute={titleKey} onChange={(event) => onChange(event, item.id)} />
                            <Input labelName="Date" object={item} attribute={dateKey} onChange={(event) => onChange(event, item.id)} />
                            <Input labelName="Description" object={item} attribute={descriptionKey} onChange={(event) => onChange(event, item.id)} type={"textarea"} />
                            {item.location && <Input labelName="Location" object={item} attribute="location" onChange={(event) => onChange(event, item.id)} />}
                            <br />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EditItem;
