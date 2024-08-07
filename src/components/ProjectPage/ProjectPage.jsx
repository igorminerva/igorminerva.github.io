import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard/ProjectCard'

const ProjectPage = () => {
    return (
        <div>
            <Container>
                <Row className="my-4">
                    <Col>
                        <h1>My Projects</h1>
                        <p>Here are some of my best works:</p>
                    </Col>
                </Row>
                <ProjectCard />
            </Container>

        </div>
    )
}

export default ProjectPage