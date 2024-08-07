import React from 'react'
import { Card } from 'react-bootstrap'

const HobbyCard = () => {
    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title>Hobbies & Interests</Card.Title>
                <Card.Text>
                    I like video games, watching sports and films
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default HobbyCard