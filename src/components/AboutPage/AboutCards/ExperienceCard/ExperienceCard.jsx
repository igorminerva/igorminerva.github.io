import React from 'react'
import { Card } from 'react-bootstrap'

const ExperienceCard = () => {
    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title>Experience</Card.Title>
                <Card.Text>
                    <strong>Non Professional</strong>
                    <ul>
                        <li>
                            <strong>Research Project: Dinamizando a Aprendizagem de Programação de Computadores usando Desenvolvimento Orientado a Testes e problemas criados pelos próprios alunos</strong><br />
                            IFSC, 2022 - 2022<br />
                            Resolve problems in Java, JavaScript and Python.<br />
                        </li>
                    </ul>
                    <strong>Professional</strong>
                    <ul>
                        <li>-</li>
                    </ul>

                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ExperienceCard