import './FieldInput.css'

const FieldInput = ({ type = 'text', label, placeholder, isRequired, value, ChangeInputValue }) => {
    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                onChange={e => ChangeInputValue(e.target.value)}
                required={isRequired}
                placeholder={placeholder}
                value={value}
            />
        </div>
    )
}

export default FieldInput