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
                        backgroundColor={team.secondaryColor}
                        textColor={team.primaryColor}
                        persons={ registered.filter(personType => personType.displayArea === team.name) }
                        onCardDelete={deleteCard}
                    />
                )
            })}
            <Footer />
        </div>
    );
}

export default App;
