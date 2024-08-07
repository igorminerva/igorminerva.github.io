import React from 'react'
import { Card } from 'react-bootstrap'

const PICard = () => {
    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title>Personal Information</Card.Title>
                <Card.Text>
                    <strong>Email:</strong> igorminerva81@gmail.com<br />
                    <strong>Phone:</strong> (73)99145-5242<br />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PICard