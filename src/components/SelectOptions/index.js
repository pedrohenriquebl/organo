import './SelectOptions.css'

const SelectOptions = ({label, options, isRequired, value, ChangeInputValue}) => {

    const handleSelectedOptions = (e) => {
        ChangeInputValue(e.target.value)
    }
    return (
        <div className="select-options">
            <label>{label}</label>
            <select required={isRequired} value={value}  onChange={handleSelectedOptions}>
                {options.map((option) => {
                    return <option key={option} value={option}>
                        {option}
                    </option>
                })}
            </select>
        </div>
    )
}

export default SelectOptions