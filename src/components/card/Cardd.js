import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../card/Cardd.css'


const Cardd = () => {
  return (
    <>
      <CardGroup className='cardd'>
        <Card>
          <Card.Img variant="top" src="css-3.webp" />
          <Card.Body>
            <Card.Title>CSS language</Card.Title>
            <Card.Text>
              CSS (Cascading Style Sheets) is a programming language used
              to describe the appearance and formatting of a document written
              in HTML or XML. It allows you to control the colors, fonts, layout,
              and other visual aspects of web pages
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="react-logo.jpg" />
          <Card.Body>
            <Card.Title>React</Card.Title>
            <Card.Text>

              React is a JavaScript library for building user interfaces. It allows developers to create
              reusable UI components and efficiently update and render them when the underlying data changes
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="images.png" />
          <Card.Body>
            <Card.Title>Bootstrap</Card.Title>
            <Card.Text>
              Bootstrap is a popular front-end framework that simplifies the process
              of building responsive and visually appealing websites. It provides a
              collection of pre-designed CSS and JavaScript components,
              such as grids, buttons, forms, and navigation bars, that can
              be easily customized and integrated into web projects
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  )
}

export default Cardd