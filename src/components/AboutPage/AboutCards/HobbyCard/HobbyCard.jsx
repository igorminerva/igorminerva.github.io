import React from 'react'
import { Card } from 'react-bootstrap'

const HobbyCard = () => {
    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title>Hobbies & Interests</Card.Title>
                <Card.Text>
                    <ul>
                        <li><strong>VideoGames:</strong> I like analyzing the game design</li>
                        <li><strong>Watching Sports:</strong> I admire sports</li>
                        <li><strong>Films:</strong> Passionate about watching and analyzing films</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default HobbyCard