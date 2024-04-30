import BodyActual from "../BodyActual";
import { Container } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";

export default function LoginPage() {
    return (
        <Container>
            <BodyActual NavActual >
            <marquee>Click [esc] at the top left to return to decoy maze game. Do NOT use the application around your POH. Only return when safe.</marquee>

                <LoginForm></LoginForm>
            </BodyActual>
        </Container>
    )
}
