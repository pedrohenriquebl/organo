import './Person.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Person = ({ name, position, image, backgroundColor, onCardDelete }) => {
    return (
        <div className="person" onClick={onCardDelete}>
            <AiFillCloseCircle size={25} className="deletar" />
            <div className="header" style={{backgroundColor: backgroundColor}}>
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