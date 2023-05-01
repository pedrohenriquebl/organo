import './Person.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Person = ({ name, position, image, backgroundColor, onCardDelete, cardId }) => {
    return (
        <div className="person">
            <AiFillCloseCircle
                size={25}
                className="deletar"
                onClick={ () => onCardDelete(cardId) }
            />
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