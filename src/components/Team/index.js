import './Team.css'
import Person from "../Person";

const Team = ({ name, backgroundColor, textColor, persons, onCardDelete, changeColor }) => {
    return (
        (persons.length > 0) && <section className="team" style={{ backgroundColor: backgroundColor, backgroundImage: 'url(/imagens/fundo.png)' }}>
            <input
                type="color"
                className="input-colors"
                value={textColor}
                onChange={event => changeColor(event.target.value, name)}
            />
            <h3 style={{borderColor: textColor}}>{name}</h3>
            <div className="team-list">
                {persons.map((person) => {
                    return (
                        <Person key={person.name}
                            backGroundColor={textColor}
                            name={person.name}
                            image={person.image}
                            position={person.position}
                            onCardDelete={onCardDelete}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Team