import './Team.css'
import Person from "../Person";

const Team = ({ name, backgroundColor, textColor, persons }) => {
    return (
        (persons.length > 0) && <section className="team" style={{ backgroundColor: backgroundColor }}>
            <h3 style={{borderColor: textColor}}>{name}</h3>
            <div className="team-list">
                {persons.map((person) => {
                    return (
                        <Person key={person.name}
                            backGroundColor={textColor}
                            name={person.name}
                            image={person.image}
                            position={person.position}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Team