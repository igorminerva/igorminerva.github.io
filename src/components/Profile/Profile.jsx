import React from 'react';
import { Button, Card} from 'react-bootstrap';

import photo1 from './assets/photo1.jpg';


function Profile() {
  const text = "Hi! You can connect with me through my LinkedIn and my GitHub";

  return (
    <Card style={{ width: '18rem', margin: '20px auto' }}>
      <Card.Img variant="top" src={photo1} />
      <Card.Body>
        <Card.Title>Igor Minerva</Card.Title>
        <Card.Text>{text}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary" href='https://github.com/igorminerva'>
            <i className="bi bi-github"></i> GitHub
          </Button>
          <Button variant="primary" href='https://www.linkedin.com/in/igor-minerva-9a0336265'>
            <i className="bi bi-linkedin"></i> LinkedIn
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Profile;
