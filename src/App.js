import Banner from "./components/Banner/";
import Form from "./components/Form/"
import Team from "./components/Team";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

    const [teams, setTeams] = useState([
        {
            name: 'Orientador',
            color: '#57c278'
        },
        {
            name: 'Front-end',
            color: '#82cffa'
        },
        {
            name: 'Back-end',
            color: '#a6d157'
        },
        {
            name: 'Gestão Ambiental',
            color: '#e06b69'
        },
        {
            name: 'Colaboradores',
            color: '#db6ebf'
        },
        {
            name: 'Patrocinadores',
            color: '#ffba05'
        },
        {
            name: 'Inovação e Gestão',
            color: '#ff8a29'
        }
    ])

    const firstLoadData = [
        {
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            displayArea: [0].name
        },
        {
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[0].name
        },
        {
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[0].name
        },
        {
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[0].name
        },
        {
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            displayArea: teams[1].name
        },
        {
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[1].name
        },
        {
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[1].name
        },
        {
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[1].name
        },
        {
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            displayArea: teams[2].name
        },
        {
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[2].name
        },
        {
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[2].name
        },
        {
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[2].name
        },
        {
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            displayArea: teams[3].name
        },
        {
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[3].name
        },
        {
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[3].name
        },
        {
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[3].name
        },
        {
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            displayArea: teams[4].name
        },
        {
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[4].name
        },
        {
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[4].name
        },
        {
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[4].name
        },
        {
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            displayArea: teams[5].name
        },
        {
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[5].name
        },
        {
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[5].name
        },
        {
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[5].name
        },
    ]

    const[registered, setRegistered] = useState(firstLoadData)

    function deleteCard () {
        console.log('deletando');
    }

    function changeTeamColor(color, teamName) {
        setTeams(teams.map( team =>{
            if (team.name === teamName) {
                team.color = color
            }

            return team;
        }))
    }

    return (
        <div className="App">
            <Banner/>
            <Form
                teamList={teams.map( team => team.name)}
                onFormSubmitted={ newRegister => setRegistered([...registered, newRegister]) }
            />
            {teams.map((team) => {
                return (
                    <Team
                        key={team.name}
                        name={team.name}
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
