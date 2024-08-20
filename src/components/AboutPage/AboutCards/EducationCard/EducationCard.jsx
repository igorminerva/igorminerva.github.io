import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EducationCard = () => {
    return (
        <Card className="card mb-3">
            <Card.Body>
                <Card.Title>Education</Card.Title>
                <Card.Text>
                    <ul>
                        <li><strong>Bachelor's Degree in Computer Science</strong><br />
                            Institudo Federal de Santa Catarina (IFSC), 2021 - On going
                        </li>
                        <li>
                            <strong>Courses</strong>
                        </li>
                        <ul>
                            <li>Claro / DIO- Java Spring boot. <Link to="https://www.linkedin.com/feed/update/urn:li:activity:7231383824524353537/">Here</Link></li>
                        </ul>   
                    </ul>

                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default EducationCard