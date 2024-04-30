import BodyActual from "../BodyActual";
import { Container } from "react-bootstrap";
import SignupForm from "../forms/SignupForm";

export default function SignupPage() {
    return (
        <Container>
            <BodyActual NavActual >
            <marquee>Click [esc] at the top left to return to decoy maze game. Do NOT use the application around your POH. Only return when safe.</marquee>

                <SignupForm></SignupForm>
            </BodyActual>
        </Container>
    )
}
