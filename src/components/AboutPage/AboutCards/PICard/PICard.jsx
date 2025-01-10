import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PICard = () => {
    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title>Personal Information</Card.Title>
                <Card.Text>
                    Born in Turin, Italy. I'm an italian-brazilian and this is my resume!.
                    <br/>
                    <strong>Email:</strong> minerva.igor1@gmail.com<br />
                    <strong>Lattes Curriculum:</strong> <Link to="http://lattes.cnpq.br/1603227135705138">Igor Minerva</Link><br/>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PICard