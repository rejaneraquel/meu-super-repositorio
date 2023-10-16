// crie um componente que retorne um <h1> com o seu nome e um parágrafo <p> com uma breve descrição sobre você.
// Lembre-se, quando vamos retornar mais de um elemento é preciso que eles estejam dentro de um <div>.

import React from "react";

class About extends React.Component {
    render() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'SoftSkills'] // adicione mais habilidades aqui
        const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
        return (
            <>
                <h1> Rejane Raquel Bezerra de Lima</h1>
                <p>Mãe de dois meninos incríveis, Brasiliense com sangue nordestino e Estudante Trybe</p>
                <h2>Minhas Habilidades</h2>
                <ol>
                    { jsxSkills }
                </ol>
            </>
        )
    }

}

export default About;