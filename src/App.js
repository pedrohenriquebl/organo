import Banner from "./components/Banner/";
import Form from "./components/Form/"
import Team from "./components/Team";
import Footer from "./components/Footer";
import { useState } from "react";
import uuid from "react-uuid";

function App() {

    const [teams, setTeams] = useState([
        {
            id: uuid(),
            name: 'Orientador',
            color: '#57c278'
        },
        {
            id: uuid(),
            name: 'Front-end',
            color: '#82cffa'
        },
        {
            id: uuid(),
            name: 'Back-end',
            color: '#a6d157'
        },
        {
            id: uuid(),
            name: 'Gestão Ambiental',
            color: '#e06b69'
        },
        {
            name: 'Colaboradores',
            color: '#db6ebf'
        },
        {
            id: uuid(),
            name: 'Patrocinadores',
            color: '#ffba05'
        },
        {
            id: uuid(),
            name: 'Inovação e Gestão',
            color: '#ff8a29'
        }
    ])

    const firstLoadData = [
        {
            id: uuid(),
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            displayArea: [0].name
        },
        {
            id: uuid(),
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[0].name
        },
        {
            id: uuid(),
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[0].name
        },
        {
            id: uuid(),
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[0].name
        },
        {
            id: uuid(),
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            displayArea: teams[1].name
        },
        {
            id: uuid(),
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[1].name
        },
        {
            id: uuid(),
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[1].name
        },
        {
            id: uuid(),
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[1].name
        },
        {
            id: uuid(),
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            displayArea: teams[2].name
        },
        {
            id: uuid(),
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[2].name
        },
        {
            id: uuid(),
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[2].name
        },
        {
            id: uuid(),
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[2].name
        },
        {
            id: uuid(),
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            displayArea: teams[3].name
        },
        {
            id: uuid(),
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[3].name
        },
        {
            id: uuid(),
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[3].name
        },
        {
            id: uuid(),
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[3].name
        },
        {
            id: uuid(),
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            displayArea: teams[4].name
        },
        {
            id: uuid(),
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[4].name
        },
        {
            id: uuid(),
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[4].name
        },
        {
            id: uuid(),
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[4].name
        },
        {
            id: uuid(),
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            displayArea: teams[5].name
        },
        {
            id: uuid(),
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[5].name
        },
        {
            id: uuid(),
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[5].name
        },
        {
            id: uuid(),
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[5].name
        },
    ]

    const[registered, setRegistered] = useState(firstLoadData);

    function deleteCard (id) {
        setRegistered(registered.filter(registered => registered.id !== id));
    }

    function changeTeamColor(color, id) {
        setTeams(teams.map( team =>{
            if (team.id !== id) {
                team.color = color;
            }

            return team;
        }));
    }

    function registerTeam(newTeam){
        setTeams([...teams, {...newTeam, id: uuid()}]);
    }

    return (
        <div className="App">
            <Banner/>
            <Form
                teamList={teams.map( team => team.name)}
                onFormSubmitted={ newRegister => setRegistered([...registered, newRegister]) }
                registerTeam={registerTeam}
            />
            {teams.map((team) => {
                return (
                    <Team
                        key={team.name}
                        name={team.name}
                        id={team.id}
                        primaryColor={team.color}
                        persons={ registered.filter(personType => personType.displayArea === team.name) }
                        onCardDelete={deleteCard}
                        changeColor={changeTeamColor}
                    />
                )
            })}
            <Footer />
        </div>
    );
}

export default App;
