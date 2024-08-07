import React from 'react'
import Carousel from './carousel/CarouselPhoto'
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
                <Row className="my-4">
                    <Col className=" my-4">
                        <h2>My photos:</h2>
                    </Col>
                    <Carousel />
                    
                </Row>
            </Container>
        </div>
    )
}

export default HomePage