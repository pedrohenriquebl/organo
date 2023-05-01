import './Person.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Person = ({ name, position, image, backgroundColor, onCardDelete, cardId, favorite, isFavorite }) => {
    function handleFavorite() {
        isFavorite(cardId);
    }

    const propsFavorite = {
        size: 25,
        onClick: handleFavorite
    }

    return (
        <div className="person">
            <AiFillCloseCircle
                size={25}
                className="delete"
                onClick={ () => onCardDelete(cardId) }
            />
            <div className="header" style={{backgroundColor: backgroundColor}}>
                <img src={image} alt={name} />
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
                <div className="favorite">
                    {favorite
                        ? <AiFillHeart size={propsFavorite.size} onClick={propsFavorite.onClick} color="#ff0000"/>
                        : <AiOutlineHeart size={propsFavorite.size} onClick={propsFavorite.onClick} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Person