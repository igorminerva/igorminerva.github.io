import React from 'react'
import { Card } from 'react-bootstrap'

const PICard = () => {
    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title>Personal Information</Card.Title>
                <Card.Text>
                    Game designer and developer based in Londrina, Brazil, focused on creating engaging experiences with emotional and educational purpose.
                    <br />
                    <strong>Email:</strong> <a href="mailto:minerva.igor1@gmail.com">minerva.igor1@gmail.com</a><br />
                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/igorminerva" target="_blank" rel="noopener noreferrer">Igor Minerva</a><br />
                    <strong>GitHub:</strong> <a href="https://github.com/igorminerva" target="_blank" rel="noopener noreferrer">igorminerva</a><br />
                    <strong>Itch.io:</strong> <a href="https://iocandux.itch.io/" target="_blank" rel="noopener noreferrer">Portfolio</a><br />
                    <strong>Featured Project:</strong> <a href="https://iocandux.itch.io/glitched-dungeon" target="_blank" rel="noopener noreferrer">Glitched Dungeon</a><br />
                    <strong>Lattes Curriculum:</strong> <a href="http://lattes.cnpq.br/1603227135705138" target="_blank" rel="noopener noreferrer">Igor Minerva</a>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PICard