import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const CardDetails = () => {
  return (
    <Card style={{ width: '18rem', margin: 'auto', marginTop: '50px' }}>
      <Image />
      <Card.Body>
        <Name />
        <Price />
        <Description />
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardDetails;