import Banner from "./components/Banner/";
import Form from "./components/Form/"
import Team from "./components/Team";
import Footer from "./components/Footer";
import { useState } from "react";
import uuid from "react-uuid";
import ButtonAppBar from "./components/Appbar/Appbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import {Paper} from "@mui/material";

function App() {
    const [darkMode, setDarkMode] = useState(false)

    const [teams, setTeams] = useState([
        {
            id: uuid(),
            name: 'One Piece',
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
            name: 'Roronoa Zoro',
            position: 'First commander',
            image: 'https://i.pinimg.com/originals/c2/52/56/c252568cba621a16810b3fe897453f84.jpg',
            displayArea: teams[0].name,
            favorite: false
        },
        {
            id: uuid(),

            name: 'Monkey D. Luffy',
            position: 'Capitan',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Monkey_D_Luffy.jpg',
            displayArea: teams[0].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'Sanji',
            position: 'Second Commander',
            image: 'https://media.cdnws.com//_i/136023/p%7B1000%7D-56735/128/37/blog-boutique-one-piece-10-choses-savoir-vinsmoke-sanji-1.jpeg',
            displayArea: teams[0].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Monkey_D_Luffy.jpg',
            displayArea: teams[1].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[1].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[1].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[1].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Monkey_D_Luffy.jpg',
            displayArea: teams[2].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[2].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[2].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[2].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Monkey_D_Luffy.jpg',
            displayArea: teams[3].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[3].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[3].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[3].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Monkey_D_Luffy.jpg',
            displayArea: teams[4].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[4].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[4].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[4].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'JULIANA AMOASEI',
            position: 'Desenvolvedora de software e instrutora',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Monkey_D_Luffy.jpg',
            displayArea: teams[5].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'DANIEL ARTINE',
            position: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            displayArea: teams[5].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'GUILHERME LIMA',
            position: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            displayArea: teams[5].name,
            favorite: false
        },
        {
            id: uuid(),
            name: 'PAULO SILVEIRA',
            position: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            displayArea: teams[5].name,
            favorite: false
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

    function resolveFavorite(id) {
        setRegistered(registered.map( register => {
            if (register.id === id) register.favorite = !register.favorite;
            return register;
        }));
    }

    const darkTheme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        },
    })

    const formStyle = {
        border: `1px solid ${darkMode ? "#FFF" : "#000"}`,
    };

    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Paper>
                    <ButtonAppBar
                        check={darkMode}
                        change={() => setDarkMode(!darkMode)}
                        darkMode={darkMode}
                    />
                    <Banner/>
                    <Form
                        teamList={teams.map( team => team.name)}
                        onFormSubmitted={ newRegister => setRegistered([...registered, newRegister]) }
                        registerTeam={registerTeam}
                        formStyle={formStyle}
                    />
                    {teams.map((team) => {
                        return (
                            <Team
                                onFavorite={resolveFavorite}
                                favorite={team.favorite}
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
                </Paper>
            </ThemeProvider>
        </div>
    );
}

export default App;
