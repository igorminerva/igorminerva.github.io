import React from 'react'
import { Card } from 'react-bootstrap'

const EducationCard = () => {
    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title>Education</Card.Title>
                <Card.Text>
                    <strong>Bachelor's Degree in Computer Science</strong><br />
                    Institudo Federal de Santa Catarina (IFSC), 2021 - On going
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default EducationCard