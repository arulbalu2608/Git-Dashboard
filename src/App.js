// App.js

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBox from './components/SearchBox';
import SelectProvider from './components/SelectProvider';
import githubService from './services/githubService';
import GitSection from './components/GitSection';
import { strings } from './helpers/constants';
import "./App.css"


const App = () => {
  const [selectedProvider, setSelectedProvider] = useState('Github');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    try {
      const data = await githubService.getUser(searchTerm);
      if (!!data) {
        console.log(data)
        setError(null);
        setUserData(data);
      }
      else {
        setError(strings.errorMessage);
        setUserData(null);
      }
    } catch (error) {
      setUserData(null);
      setError(strings.errorMessage);
    }
  };

  const handleSelectProvider = (provider) => {
    setSelectedProvider(provider);
    setUserData(null);
    setError(null);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 4, offset: 2 }}>
          <SearchBox onSearch={handleSearch} />
        </Col>
        <Col md={2}>
          <SelectProvider selectedProvider={selectedProvider} onSelectProvider={handleSelectProvider} />
        </Col>
        <Col md={12} className='mt-5'>
          <GitSection userData={userData} error={error} />

        </Col>
      </Row>
    </Container>
  );
};

export default App;
