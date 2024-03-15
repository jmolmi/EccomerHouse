import Container from 'react-bootstrap/Container';

export const ItemListContainer = ({greeting}) => (
    <Container className='mt-4'>
        <h6>{greeting}</h6>
    </Container>
);