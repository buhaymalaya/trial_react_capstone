import BodyActual from "../BodyActual";
import { Container } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";

export default function IntakeLoginPage() {
    return (
        <Container>
            <BodyActual NavActual >
                <marquee>Do NOT use the application around your POH. Only return when safe. Do NOT use the application around your POH. Only return when safe.</marquee>

                <LoginForm></LoginForm>
            </BodyActual>
        </Container>
    )
}
