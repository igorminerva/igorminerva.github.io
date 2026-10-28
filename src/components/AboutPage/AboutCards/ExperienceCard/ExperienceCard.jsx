import React from 'react'
import { Card } from 'react-bootstrap'

const ExperienceCard = () => {
    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title>Experience</Card.Title>
                <Card.Text>
                    <ul>
                        <li>
                            <strong>Glitched Dungeon - Lead Designer &amp; Developer</strong>, 2026 - Present<br />
                            Designed and developed a Godot roguelike deckbuilder for Windows, Linux, and Android. Built three acts with enemy AI, deckbuilding, rest sites, shops, and bosses, with educational mechanics for programming logic research.
                        </li>
                        <li>
                            <strong>Game Research Assistant, Universidade Estadual de Londrina</strong>, August 2025 - Present<br />
                            Researching AI integration and player emotion in educational games; prototyping adaptive difficulty in Godot and collaborating on player engagement studies.
                        </li>
                        <li>
                            <strong>Teaching Assistant - Computer Vision &amp; Image Processing, Universidade Estadual de Londrina</strong>, November 2025<br />
                            Assisted with image processing algorithms and developed Python exercises on texture analysis and object detection for game assets.
                        </li>
                        <li>
                            <strong>GMTK Game Jam 2026 - Game Developer</strong>, July 2026<br />
                            Created Ballin, a playable prototype with time-pressure mechanics and audiovisual feedback during a 96-hour jam.
                        </li>
                        <li>
                            <strong>HackathOrion 2025 - Team Lead &amp; Developer</strong>, May 2025<br />
                            Led a six-person team in a 48-hour hackathon to build and present an automation solution.
                        </li>
                        <li>
                            <strong>Research Assistant, IFSC</strong>, July - December 2022<br />
                            Supported a programming education project using Test-Driven Development and student-created challenges; worked with Java, Python, and JavaScript.
                        </li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ExperienceCard