import React from 'react'
import { Card, Row } from 'react-bootstrap'

const HomeCard = () => {

    return (
        <Row className='justify-content-center'>
            <Card className="card mb-3">
                <Card.Body>
                    <Card.Title>Hello! I'm Igor Minerva</Card.Title>
                    <Card.Text>
                        and this is my Portfolio, made by me, where you can see my resume in "About" page and
                        some of my projects in "Projects" page. I hope you like this site.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default HomeCard