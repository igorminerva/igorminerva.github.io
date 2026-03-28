import React from 'react'
import { Card, Row } from 'react-bootstrap'

const HomeCard = () => {
    const sectionStyle = {
        marginTop: '32px',
        marginBottom: '24px',
        fontSize: '20px',
        fontWeight: '600',
        letterSpacing: '0.01em'
    }

    const paragraphStyle = {
        marginBottom: '16px',
        lineHeight: '1.6',
        color: '#bbb'
    }

    return (
        <Row className='justify-content-center'>
            <Card className="card mb-3">
                <Card.Body>
                    <Card.Text>
                        <h2 style={{ marginBottom: '24px', fontSize: '32px', fontWeight: '700' }}>
                            Igor Minerva
                        </h2>
                        <p style={{ ...paragraphStyle, fontSize: '18px', fontWeight: '500', marginBottom: '32px' }}>
                            Researcher | Problem Solver | Tech Enthusiast
                        </p>

                        <p style={paragraphStyle}>
                            I'm a researcher. I tried my best to learn things by myself, and I have a strong passion for learning and problem-solving. I have a deep interest in technology and its potential to drive innovation and create impactful solutions. My journey has been fueled by curiosity, a desire to understand complex systems, and a commitment to continuous growth.
                        </p>

                        <h3 style={sectionStyle}>
                            Expertise & Approach
                        </h3>
                        <p style={paragraphStyle}>
                            My expertise spans across various domains, including software development, data analysis, game design and development and machine learning. I thrive on tackling challenging problems and finding creative solutions. I believe in a collaborative approach to research and development, valuing diverse perspectives and fostering an environment of open communication.
                        </p>

                        <h3 style={sectionStyle}>
                            Experience
                        </h3>
                        <p style={paragraphStyle}>
                            Throughout my career, I've contributed to a diverse range of projects—from personal applications. Each experience has reinforced my commitment to innovation and problem-solving. My complete technical background is available on the <strong>About</strong> page, and selected work can be found in the <strong>Projects</strong> section.
                        </p>

                        <h3 style={sectionStyle}>
                            Let's Connect
                        </h3>
                        <p style={paragraphStyle}>
                            I'm interested in connecting with professionals, exploring new opportunities, and collaborating on meaningful projects. Feel free to reach out to discuss ideas, potential partnerships, or to learn more about my work.
                        </p>
                    
                    </Card.Text>
            </Card.Body>
        </Card>
        </Row >
    )
}

export default HomeCard