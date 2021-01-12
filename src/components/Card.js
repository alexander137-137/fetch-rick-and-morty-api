import React from 'react';
import { Card } from 'react-bootstrap';

export const CardComponent = ({
  item: { name, status, species, gender, image },
}) => {
  return (
    <Card>
      <Card.Img src={image} />
      <Card.Body>
        <Card.Title className='text-center'>{name}</Card.Title>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
          }}>
          <Card.Subtitle className='mb-2 text-muted'>Status:</Card.Subtitle>
          <Card.Text className='ml-2'>{status}</Card.Text>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
          }}>
          <Card.Subtitle className='mb-2 text-muted'>Species:</Card.Subtitle>
          <Card.Text className='ml-2'>{species}</Card.Text>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
          }}>
          <Card.Subtitle className='mb-2 text-muted'>Gender:</Card.Subtitle>
          <Card.Text className='ml-2'>{gender}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};
