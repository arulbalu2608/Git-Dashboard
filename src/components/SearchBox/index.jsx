import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { strings } from '../../helpers/constants';


const SearchBox = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <Form>
            <Form.Group>
                <Form.Label>{strings.search}</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form.Group>
            <Button className='mt-3' variant="success" onClick={handleSearch}>
                {strings.search}
            </Button>
        </Form>
    );
};

export default SearchBox;
