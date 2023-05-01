import './Person.css'

const Person = ({ name, position, image, backGroundColor, onCardDelete }) => {
    return (
        <div className="person" onClick={onCardDelete}>
            <div className="deletar">Deletar</div>
            <div className="header" style={{backgroundColor: backGroundColor}}>
                <img src={image} alt={name} />
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Person