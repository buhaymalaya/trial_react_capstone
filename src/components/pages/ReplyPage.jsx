import { Container } from 'react-bootstrap'
import BodyLoggedIn from '../BodyLoggedIn'
import ReplyForm from '../forms/ReplyForm'

export default function ReplyPage() {
    return (
        <Container>
            <BodyLoggedIn NavLogged>
            <marquee>Click [esc] at the top left to return to decoy maze game. Do NOT use the application around your POH. Only return when safe.</marquee>
            
                <ReplyForm />
            </BodyLoggedIn>
        </Container>
    );
}
