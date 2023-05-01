import './Form.css'
import TextInput from "../TextInput";
import SelectOptions from "../SelectOptions";
import Button from "../Button";
import {useState} from "react";

const Form = ({ onFormSubmitted, teamList, registerTeam }) => {

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
            <form onSubmit={handleSubmit}>
                <h2>Adicione os Integrantes</h2>
                <TextInput
                    isRequired={true}
                    label="Nome"
                    placeholder="Digite seu Nome"
                    value={name}
                    ChangeInputValue={ value => setName(value) }
                />
                <TextInput
                    isRequired={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    value={position}
                    ChangeInputValue={ value => setPosition(value) }
                />
                <TextInput
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
            <form onSubmit={(e) => {
                e.preventDefault();
                registerTeam({ name: teamName, color: teamColor});

                setTeamColor('');
                setTeamName('');
            }}>
                <h2>Preencha os Campos para criar um novo time.</h2>
                <TextInput
                    isRequired
                    label="Nome"
                    placeholder="Digite o nome do Time"
                    value={teamName}
                    ChangeInputValue={ value => setTeamName(value) }
                />
                <TextInput
                    isRequired
                    label="Cor"
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