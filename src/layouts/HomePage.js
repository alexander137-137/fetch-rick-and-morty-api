import React from 'react';
import { Container } from 'react-bootstrap';

export const HomePageLayout = ({ children }) => {
  return (
    <Container fluid>
      <Container style={{ maxWidth: 960 }}>{children}</Container>
    </Container>
  );
};
