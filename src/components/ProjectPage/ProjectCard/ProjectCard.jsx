import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap';

import phApp from '../assets/phApp.png'
import ttc from '../assets/ttc.png'
import php from '../assets/php.png'
import site from '../assets/site.png'

const ProjectCard = () => {
  const projects = [
    {
      title: 'My website',
      description: 'The project of the website that you\'re looking',
      imgSrc: site,
      github: 'https://github.com/igorminerva/igorminerva.github.io',

    },
    {
      title: 'App NBA',
      description: 'App made in react native to show the statistics of the NBA',
      imgSrc: phApp,
      github: 'https://github.com/igorminerva/APP-react-native',

    },
    {
      title: 'TicTacToe in C',
      description: 'A simple TicTacToe game made in C and playable in the terminal',
      imgSrc: ttc,
      github: 'https://github.com/igorminerva/tictactoe',

    },
    {
      title: 'Login Form PHP',
      description: 'A simple login/register form in php linked with a mySql database',
      imgSrc: php,
      github: 'https://github.com/igorminerva/SimpleLoginFormPHP',

    },


  ];
  return (
    <Row>
      {projects.map((project, index) => (
        <Col key={index} sm={12} md={6} lg={4} className="mb-3">
          <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={project.imgSrc} style={{height:'18rem', objectFit:'contain'}}/>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="primary" href={project.github} target="_blank" block>
                  <i class="bi bi-github"></i> GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ProjectCard