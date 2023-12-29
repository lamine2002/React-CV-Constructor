export default function Input({labelName ,attribute, object = null, value,  onChange, type = 'text'}) {
    return (
        <div className="person-details-form-content-item">
            <label htmlFor="name">{labelName}</label>
            <input
                type={type}
                key={`input${attribute}`}
                name={attribute}
                value={object ? object[attribute] : value}
                onChange={onChange}
            />
        </div>
    )
}