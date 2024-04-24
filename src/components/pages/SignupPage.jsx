import BodyActual from "../BodyActual";
import { Container } from "react-bootstrap";
import SignupForm from "../forms/SignupForm";

export default function SignupPage() {
    return (
        <Container>
            <BodyActual NavActual >
                <marquee>Do NOT use the application around your POH. Only return when safe. Do NOT use the application around your POH. Only return when safe.</marquee>

                <SignupForm></SignupForm>
            </BodyActual>
        </Container>
    )
}
