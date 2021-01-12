import React from 'react';
import { Container } from 'react-bootstrap';
import { Slider } from '../components/Slider';

export const HomePageLayout = ({ children }) => {
  return (
    <Container fluid>
      {/* <Slider /> */}
      <Container style={{ maxWidth: 960 }}>{children}</Container>
    </Container>
  );
};
