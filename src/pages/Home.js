import React, { useEffect, useState } from 'react';
import { HomePageLayout } from '../layouts/HomePage';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { CardComponent } from '../components/Card';
import { LoadingIndicator } from '../components/LoadingIndicator';
export const HomePage = () => {
  const defaultUrl = 'https://rickandmortyapi.com/api/character';
  const [page, setPage] = useState({});
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAll = async (url) => {
    setLoading(true);
    const response = await fetch(url);
    const result = await response.json();

    const { info, results } = result;
    setPage({ currentPageUrl: url, info });
    setLoading(false);

    if (!info.prev) {
      setCharacters(results);
      return;
    }

    setCharacters([...characters, ...results]);
  };

  useEffect(() => {
    fetchAll(defaultUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextPage = () => {
    const {
      info: { next: nextPageUrl },
    } = page;

    fetchAll(nextPageUrl);
  };

  const onSubmitHandler = () => {
    const filterUrl = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;
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
      {loading ? (
        <LoadingIndicator />
      ) : (
        <motion.div>
          <Row xs={1} sm={2} md={3}>
            {characters.map((character) => {
              const { id } = character;
              return (
                <motion.div key={id} whileHover={{ scale: 1.1 }}>
                  <Col className='mb-5'>
                    <CardComponent item={character} />
                  </Col>
                </motion.div>
              );
            })}
          </Row>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Button
              variant='primary'
              size='lg'
              onClick={() => nextPage()}
              className='mb-5'>
              Load more...
            </Button>
          </div>
        </motion.div>
      )}
    </HomePageLayout>
  );
};
