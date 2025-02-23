import React from 'react'
import HomeCard from './homeCard/HomeCard'
import { Container, Row, Col } from 'react-bootstrap'

const HomePage = () => {
    return (
        <div>
            <Container>
                <Row className="my-4">
                    <Col>
                        <h1>Welcome to My Portfolio</h1>
                    </Col>
                </Row>

                <Row className="">
                    <HomeCard />
                </Row>
            </Container>
        </div>
    )
}

export default HomePage