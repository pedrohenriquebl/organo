import './Form.css'
import FieldInput from "../FieldInput";
import SelectOptions from "../SelectOptions";
import Button from "../Button";
import {useState} from "react";

const Form = ({ onFormSubmitted, teamList, registerTeam, formStyle }) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [displayArea, setDisplayArea] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onFormSubmitted({
            name,
            position,
            image,
            displayArea
        })

        setName('')
        setImage('')
        setPosition('')
        setDisplayArea('')
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit} style={formStyle}>
                <h2>Adicione os Integrantes</h2>
                <FieldInput
                    isRequired={true}
                    label="Nome"
                    placeholder="Digite seu Nome"
                    value={name}
                    ChangeInputValue={ value => setName(value) }
                />
                <FieldInput
                    isRequired={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    value={position}
                    ChangeInputValue={ value => setPosition(value) }
                />
                <FieldInput
                    isRequired={true}
                    label="Imagem"
                    placeholder="Informe a URL da Imagem"
                    value={image}
                    ChangeInputValue={ value => setImage(value) }
                />
                <SelectOptions
                    label="Time"
                    options={teamList}
                    isRequired={true}
                    value={displayArea}
                    ChangeInputValue={ value => setDisplayArea(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
            <form style={formStyle}
                onSubmit={(e) => {
                e.preventDefault();
                registerTeam({ name: teamName, color: teamColor});

                setTeamColor('');
                setTeamName('');
            }}>
                <h2>Preencha os Campos para criar um novo time.</h2>
                <FieldInput
                    isRequired
                    label="Nome"
                    placeholder="Digite o nome do Time"
                    value={teamName}
                    ChangeInputValue={ value => setTeamName(value) }
                />
                <FieldInput
                    isRequired
                    label="Cor"
                    type="color"
                    placeholder="Digite a cor do Time"
                    value={teamColor}
                    ChangeInputValue={ value => setTeamColor(value) }
                />
                <Button>
                    Criar um novo Time
                </Button>
            </form>
        </section>
    )
}

export default Form