import './Team.css'
import Person from "../Person";
import  hexToRgba  from "hex-to-rgba";

const Team = ({ name, primaryColor, persons, onCardDelete, changeColor, onFavorite }) => {
    return (
        (persons.length > 0) && <section className="team" style={{  backgroundImage: 'url(/imagens/fundo.png)' }}>
            <input
                type="color"
                className="input-colors"
                value={primaryColor}
                onChange={event => changeColor(event.target.value)}
            />
            <h3 style={{borderColor: primaryColor}}>{name}</h3>
            <div className="team-list">
                {persons.map((person) => {
                    return (
                        <Person
                            key={person.name}
                            backgroundColor={primaryColor}
                            name={person.name}
                            image={person.image}
                            position={person.position}
                            onCardDelete={onCardDelete}
                            cardId={person.id}
                            favorite={person.favorite}
                            isFavorite={onFavorite}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Team