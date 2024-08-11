import { Table } from 'react-bootstrap';

const SearchResultsTable = ({ searchResults }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th style={{ backgroundColor: 'black', color: 'white' }}>#</th>
                    <th style={{ backgroundColor: 'black', color: 'white' }}> Title</th>
                    <th style={{ backgroundColor: 'black', color: 'white' }}>Body</th>
                </tr>
            </thead>
            <tbody>
                {searchResults.map((result, index) => (
                    <tr key={index}>
                        <td style={{ backgroundColor: 'black', color: 'white' }}>{index + 1}</td>
                        <td style={{ backgroundColor: 'black', color: 'white' }}>{result.title}</td>
                        <td style={{ backgroundColor: 'black', color: 'white' }}>{result.body}</td>

                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default SearchResultsTable;
