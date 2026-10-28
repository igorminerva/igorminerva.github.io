import React from 'react'
import { Card } from 'react-bootstrap'

const EducationCard = () => {
    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title>Education</Card.Title>
                <Card.Text>
                    <ul>
                        <li>
                            <strong>Master of Science in Computer Science</strong><br />
                            Universidade Estadual de Londrina (UEL), August 2025 - Present<br />
                            Research on programming logic education, player emotion, and motivation through original game prototypes, including adaptive difficulty systems.
                        </li>
                        <li>
                            <strong>Bachelor of Science in Computer Science</strong><br />
                            Instituto Federal de Santa Catarina (IFSC), March 2021 - December 2024<br />
                            Capstone: developed an educational game platform using GDScript and Godot. Relevant coursework included game design, graphics programming, AI for games, and human-computer interaction.
                        </li>
                    </ul>

                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default EducationCard