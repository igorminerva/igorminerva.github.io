import React from 'react'
import { Card } from 'react-bootstrap'

const SkillCard = () => {
    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title>Skills</Card.Title>
                <Card.Text>
                    <strong>Programming Languages</strong>
                    <ul>
                        <li>Java</li>
                        <li>JavaScript - Libraries: React.js / React native</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>PHP</li>
                        <li>HTML/CSS</li>
                        <li>MySql</li>
                    </ul>
                    <strong>Technologies</strong>
                    <ul>
                        <li>Git</li>
                        <li>Google Docs / spreadsheets</li>
                        <li>Microsoft Office</li>
                        <li>Blender</li>
                        <li>Linux</li>
                    </ul>
                    <strong>Languages</strong>
                    <ul>
                        <li>Italian</li>
                        <li>English</li>
                        <li>Portuguese</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SkillCard