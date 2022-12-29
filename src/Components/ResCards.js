import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate, useParams } from "react-router-dom";
function ResCards({ restaurant }) {
  const nav = useNavigate();
 
  return (
    <Link style={{textDecoration:"none"}} to={`/viewRes/${restaurant.id}` }>

   
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Card style={{ width: "18rem" }} className='mb-2'>
        <Card.Img variant="top" src={restaurant.photograph} />
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text>{restaurant.neighborhood}</Card.Text>
        </Card.Body>
      </Card>
    </div>
    </Link>
  );
}

export default ResCards;
