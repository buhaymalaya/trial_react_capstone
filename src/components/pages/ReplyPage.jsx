import { Container } from 'react-bootstrap'
import BodyLoggedIn from '../BodyLoggedIn'
import ReplyForm from '../forms/ReplyForm'

export default function ReplyPage() {
    return (
        <Container>
            <BodyLoggedIn NavLogged>
                <ReplyForm />
            </BodyLoggedIn>
        </Container>
    );
}
