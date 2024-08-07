import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutCards from './AboutCards/AboutCards'
import ResumeButton from './ResumeButton/ResumeButton'

const AboutPage = () => {
  return (
    <Container className='mb-2'>
      <Row className="my-4">
        <Col>
          <h1>About Me</h1>
        </Col>
      </Row>
      <AboutCards />
      <ResumeButton />
    </Container>
  )
}

export default AboutPage