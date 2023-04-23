import './TextInput.css'

const TextInput = ({ label, placeholder, isRequired, value, ChangeInputValue }) => {

    return (
        <div className="field-text">
            <label>{label}</label>
            <input onChange={e => ChangeInputValue(e.target.value)} required={isRequired} placeholder={placeholder} value={value}/>
        </div>
    )
}

export default TextInput