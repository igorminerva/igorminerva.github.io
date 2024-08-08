import React from 'react'
import { Card } from 'react-bootstrap'

const PICard = () => {
    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title>Personal Information</Card.Title>
                <Card.Text>
                    Born in Turin, Italy. I'm an italian-brazilian and this is my resume!.
                    <br/>
                    <strong>Email:</strong> igorminerva81@gmail.com<br />
                    <strong>Instagram:</strong> @mr_candux<br />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PICard