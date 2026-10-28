import React from 'react'
import { Card } from 'react-bootstrap'

const SkillCard = () => {
    const cardTitleStyle = {
        fontFamily: 'var(--font-pixel)',
        fontSize: '14px',
        marginBottom: '16px'
    }

    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title style={cardTitleStyle}>&gt; SKILLS</Card.Title>
                <Card.Text>
                    <strong>Programming Languages</strong>
                    <ul>
                        <li>GDScript</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>SQL</li>
                    </ul>
                    <strong>Game Design &amp; AI</strong>
                    <ul>
                        <li>Level design, gameplay mechanics, roguelike and deckbuilding design, player feedback, balancing, and emotional design</li>
                        <li>Finite State Machines and Behavior Trees</li>
                    </ul>
                    <strong>Tools</strong>
                    <ul>
                        <li>Godot, Git, Blender, GIMP, Visual Studio, and Audacity</li>
                    </ul>
                    <strong>Languages</strong>
                    <ul>
                        <li>Italian (Native)</li>
                        <li>English (Advanced/C1)</li>
                        <li>Portuguese (Native)</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SkillCard