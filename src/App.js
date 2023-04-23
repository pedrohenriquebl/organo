import Banner from "./components/Banner/";
import Form from "./components/Form/"
import Team from "./components/Team";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

    const teams = [
        {
            name: 'Orientador',
            primaryColor: '#57c278',
            secondaryColor: '#d9f7e9'
        },
        {
            name: 'Front-end',
            primaryColor: '#82cffa',
            secondaryColor: '#e8f8ff'
        },
        {
            name: 'Back-end',
            primaryColor: '#a6d157',
            secondaryColor: '#f0f8e2'
        },
        {
            name: 'Gestão Ambiental',
            primaryColor: '#e06b69',
            secondaryColor: '#fde7e8'
        },
        {
            name: 'Colaboradores',
            primaryColor: '#db6ebf',
            secondaryColor: '#fae9f5'
        },
        {
            name: 'Patrocinadores',
            primaryColor: '#ffba05',
            secondaryColor: '#fff5d9'
        },
        {
            name: 'Inovação e Gestão',
            primaryColor: '#ff8a29',
            secondaryColor: '#ffeedf'
        }
    ]

    const[registered, setRegistered] = useState([])

    const onNewRegister = (newRegister) => {
        setRegistered([...registered, newRegister])
    }

    return (
        <div className="App">
            <Banner/>
            <Form
                teamList={teams.map( team => team.name)}
                onFormSubmitted={ newRegister => onNewRegister(newRegister) }
            />
            {teams.map((team) => {
                return (
                    <Team key={team.name}
                        name={team.name}
                        backgroundColor={team.secondaryColor}
                        textColor={team.primaryColor}
                        persons={ registered.filter(personType => personType.displayArea === team.name) }
                    />
                )
            })}
            <Footer />
        </div>
    );
}

export default App;
