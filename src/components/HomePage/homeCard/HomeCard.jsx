import React from 'react'
import { Card, Row } from 'react-bootstrap'

const HomeCard = () => {

    return (
        <Row className='justify-content-center'>
            <Card className="card mb-3">
                <Card.Body>
                    <Card.Text>
                        <p style={{ marginBottom: '24px', fontSize: '28px', fontWeight: 'bold' }}>
                            👋 <strong>Hi, I’m Igor Minerva, a Full-Stack Developer</strong>
                        </p>
                        <p style={{ marginBottom: '24px' }}>
                            My journey into the world of coding began during my university years, where I discovered my passion for solving problems and building things that matter. Since then, I’ve been dedicated to honing my skills and building a strong career in tech. I specialize in creating functional, elegant, and scalable solutions that make a real impact.
                        </p>

                        <p style={{ marginBottom: '24px', fontSize: '28px', fontWeight: 'bold' }}>
                            🚀 <strong>What Drives Me</strong>
                        </p>
                        <p style={{ marginBottom: '24px' }}>
                            I’m a lifelong learner at heart. Whether it’s mastering a new programming language, exploring cutting-edge frameworks, or diving into the latest tools, I’m always pushing myself to grow. I believe that adaptability and continuous improvement are the keys to staying relevant in the fast-paced tech industry. My goal is to deliver high-quality, innovative solutions that not only meet but exceed expectations.
                        </p>

                        <p style={{ marginBottom: '24px', fontSize: '28px', fontWeight: 'bold' }}>
                            💻 <strong>What I Do</strong>
                        </p>
                        <p style={{ marginBottom: '24px' }}>
                            As a Full-Stack Developer, I work across the entire development stack, from designing user-friendly interfaces to building back-end systems. But I can also move in differents area of computer science.
                            My Skills can be found in the "About" page.
                            I’m also passionate about clean code, efficient workflows, and collaborative development practices.
                        </p>

                        <p style={{ marginBottom: '24px', fontSize: '28px', fontWeight: 'bold' }}>
                            🌟 <strong>My Projects</strong>
                        </p>
                        <p style={{ marginBottom: '24px' }}>
                            Over the years, I’ve worked on a variety of projects, from small personal apps to large-scale enterprise solutions. 
                            They can be found in the "Projects" pages. I recommend check it out.
                            Each project has taught me something new and reinforced my love for problem-solving and innovation.
                        </p>

                        <p style={{ marginBottom: '24px', fontSize: '28px', fontWeight: 'bold' }}>
                            📫 <strong>Let’s Collaborate!</strong>
                        </p>
                        <p style={{ marginBottom: '24px' }}>
                            I’m always excited to connect with like-minded individuals, tackle new challenges, and explore opportunities. Whether it’s a project, idea, or just a chat about tech, feel free to reach out—I’d love to hear from you! Let’s build something amazing together.
                        </p>
                    
                    </Card.Text>
            </Card.Body>
        </Card>
        </Row >
    )
}

export default HomeCard