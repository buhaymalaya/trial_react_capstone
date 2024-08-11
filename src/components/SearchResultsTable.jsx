import { Table } from 'react-bootstrap';

const SearchResultsTable = ({ searchResults }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th style={{ backgroundColor: 'darkgray', color: 'white' }}>#</th>
                    <th style={{ backgroundColor: 'darkgray', color: 'white' }}> Title</th>
                    <th style={{ backgroundColor: 'darkgray', color: 'white' }}>Body</th>
                </tr>
            </thead>
            <tbody>
                {searchResults.map((result, index) => (
                    <tr key={index}>
                        <td style={{ backgroundColor: 'darkgray', color: 'white' }}>{index + 1}</td>
                        <td style={{ backgroundColor: 'darkgray', color: 'white' }}>{result.title}</td>
                        <td style={{ backgroundColor: 'darkgray', color: 'white' }}>{result.body}</td>

                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default SearchResultsTable;
