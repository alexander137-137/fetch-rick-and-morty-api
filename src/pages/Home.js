import React, { useEffect, useState } from 'react';
import { HomePageLayout } from '../layouts/HomePage';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ImageVariants = {
  hover: {
    scale: 1.1,
  },
};

export const HomePage = () => {
  const defaultUrl = 'https://rickandmortyapi.com/api/character';

  const [page, setPage] = useState({});
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchAll = async (url) => {
    const response = await fetch(url);
    const result = await response.json();

    const { info, results } = result;
    setPage({ currentPageUrl: url, info });

    if (!info.prev) {
      setCharacters(results);
      return;
    }
    setCharacters([...characters, ...results]);
  };

  useEffect(() => {
    fetchAll(defaultUrl);
  }, []);

  const nextPage = () => {
    const {
      info: { next: nextPageUrl },
    } = page;

    fetchAll(nextPageUrl);
  };

  const onSubmitHandler = () => {
    const filterUrl = `https://rickandmortyapi.com/api/character/?name=${searchTerm}&status=alive`;
    fetchAll(filterUrl);
  };

  return (
    <HomePageLayout>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col xs={12} lg={6}>
          <Form style={{ display: 'flex' }} className='mt-5 mb-5'>
            <Form.Control
              onChange={(e) => setSearchTerm(e.target.value)}
              className='mb-2 mr-sm-2'
              id='inlineFormInputName2'
              placeholder='Search by name'
            />
            <Button className='mb-2' onClick={() => onSubmitHandler()}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3}>
        {characters.map((character) => {
          const { id, name, status, species, gender, image } = character;
          return (
            <Col key={id} className='mb-5'>
              <Card>
                <Card.Img src={image} />
                <Card.Body>
                  <Card.Title className='text-center'>{name}</Card.Title>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                    }}>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Status:
                    </Card.Subtitle>
                    <Card.Text className='ml-2'>{status}</Card.Text>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                    }}>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Species:
                    </Card.Subtitle>
                    <Card.Text className='ml-2'>{species}</Card.Text>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                    }}>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Gender:
                    </Card.Subtitle>
                    <Card.Text className='ml-2'>{gender}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Button variant='primary' size='lg' onClick={() => nextPage()}>
          Load more...
        </Button>
      </div>
    </HomePageLayout>
  );
};
