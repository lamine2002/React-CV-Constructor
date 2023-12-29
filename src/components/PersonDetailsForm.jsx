import Input from "./Input.jsx";

export default function PersonDetailsForm({person, setPerson}) {

    const onChange = (event) => {
        setPerson({...person, [event.target.name]: event.target.value})

    }

    return (
        <div className="person-details-form">
            <h2 className="person-details-form-title">Informations personnelles</h2>
            <div className="person-details-form-content">
                <Input labelName="Nom" attribute="name" object={person} onChange={onChange}/>
                <Input labelName="Email" attribute="mail" object={person} onChange={onChange}/>
                <Input labelName="Téléphone" attribute="tel" object={person} onChange={onChange}/>
                <Input labelName="Adresse" attribute="address" object={person} onChange={onChange}/>
            </div>
        </div>
    )
}