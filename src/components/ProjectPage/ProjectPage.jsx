import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard/ProjectCard'
import { useNavigate } from 'react-router-dom'

const ProjectPage = () => {
    const navigate = useNavigate()

    const backStyle = {
        fontFamily: 'var(--font-pixel)',
        fontSize: '12px',
        marginTop: '16px',
        marginBottom: '24px',
        cursor: 'pointer',
        color: '#666'
    }

    return (
        <div>
            <p style={backStyle} onClick={() => navigate('/')}>
                &lt; BACK TO MENU
            </p>
            <Container style={{ maxWidth: '100%' }}>
                <Row className="my-4">
                    <Col>
                        <h1>My Projects</h1>
                        <p>Here are some of my best works:</p>
                    </Col>
                </Row>
                <div className="mb-4">
                    <iframe
                        title="Glitched Dungeon by iocandux"
                        frameBorder="0"
                        src="https://itch.io/embed/5106907?bg_color=a15952&amp;fg_color=efefef&amp;link_color=331e0d&amp;border_color=331e0d"
                        width="552"
                        height="167"
                        style={{ maxWidth: '100%' }}
                    >
                        <a href="https://iocandux.itch.io/glitched-dungeon">Glitched Dungeon by iocandux</a>
                    </iframe>
                </div>
                <ProjectCard />
            </Container>
        </div>
    )
}

export default ProjectPage