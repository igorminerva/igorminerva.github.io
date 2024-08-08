import React from 'react'
import { Card, Row } from 'react-bootstrap'

const HomeCard = () => {

    return (
        <Row className='justify-content-center'>
            <Card className="card mb-3">
                <Card.Body>
                    <Card.Title>Hello! I'm Igor Minerva</Card.Title>
                    <Card.Text>
                        I'm a computer science student based in Brazil, passionate about technology and innovation. This space is where I showcase my latest projects, share my resume, and reflect on the journey that's shaping my future in tech. I invite you to explore my work, learn more about who I am, and reach out if you're interested in collaborating or just want to chat.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default HomeCard