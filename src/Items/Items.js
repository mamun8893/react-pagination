import React from "react";
import { Card, Col } from "react-bootstrap";

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, i) => (
          <Col key={i} lg={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
              />
              <Card.Body>
                <Card.Title>Card title #{item}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
};

export default Items;
