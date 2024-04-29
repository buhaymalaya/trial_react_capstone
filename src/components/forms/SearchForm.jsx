import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SearchResultsTable from '../SearchResultsTable';

const SearchForm = ({ onSearch }) => {
    const [keyword, setKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]); // Define searchResults state

    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch(`https://capstone-draft-flask.onrender.com/post/search?keyword=${keyword}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (res.ok) {
                const data = await res.json();
                setSearchResults(data); // Update searchResults state with search results data
            } else {
                alert("Failed to find posts")
                console.error('Failed to fetch search results:', res.statusText);
            }
        } catch (error) {
            alert("Failed to find posts")
            console.error('Failed to fetch search results:', error.message);
        }
    };

    return (
        <Container className='about-decoy'>
            <Form onSubmit={handleSubmit}>
                <Row className="align-items-center">
                    <Col className='search'>
                        <Form.Control
                            type="text"
                            placeholder="Enter a keyword to find specific posts"
                            value={keyword}
                            onChange={handleInputChange}
                            style={{ backgroundColor: 'black', color: 'white', borderRadius: '0' }}
                        />
                    </Col>
                    <Col xs="auto" className='search-btn'>
                        <Button variant="primary" type="submit" style={{ backgroundColor: 'black', borderColor: 'white', borderRadius: '0' }}>
                            search
                        </Button>
                    </Col>
                </Row>
            </Form>

<br />            {searchResults.length > 0 && <SearchResultsTable searchResults={searchResults} />}
        </Container>
    );
};

export default SearchForm;
