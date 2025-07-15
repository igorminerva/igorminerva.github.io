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
                            Collaborative project focused on improving programming education through Test-Driven Development
                            (TDD) and student-generated challenges.<br/>
                            Tech Stack: Java, JavaScript, Python<br/>
                            GitHub: github.com/wilsoncastello/problemasProgramacao<br />
                        </li>
                        <li>
                            <strong>HackathOrion (2025)</strong><br />
                            Developed a WhatsApp bot using JavaScript for managing office reservations, Google Form automation, and
                            event creation in Google Calendar for both clients and staff, with email notifications.<br/>
                            Tech Stack: JavaScript, Google Apps Script, Google Workspace
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