import { Table } from 'react-bootstrap';

const SearchResultsTable = ({ searchResults }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th style={{ backgroundColor: '#1e1e1e', color: 'white' }}>#</th>
                    <th style={{ backgroundColor: '#1e1e1e', color: 'white' }}> Title</th>
                    <th style={{ backgroundColor: '#1e1e1e', color: 'white' }}>Body</th>
                </tr>
            </thead>
            <tbody>
                {searchResults.map((result, index) => (
                    <tr key={index}>
                        <td style={{ backgroundColor: '#1e1e1e', color: 'white' }}>{index + 1}</td>
                        <td style={{ backgroundColor: '#1e1e1e', color: 'white' }}>{result.title}</td>
                        <td style={{ backgroundColor: '#1e1e1e', color: 'white' }}>{result.body}</td>

                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default SearchResultsTable;
