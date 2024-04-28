import BodyActual from "../BodyActual";
import { Container } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";

export default function IntakeLoginPage() {
    return (
        <Container>
            <BodyActual NavActual >
                <marquee>Do NOT use the application around your POH. Only return when safe. Do NOT use the application around your POH. Only return when safe.</marquee>
                <hr /><p>The Intake Form Tool will help expedite the process of connecting a DV survivor (who is actively seeking safe refuge) to a DV shelter or safehouse by sending this completed form to multiple DV agencies at once. When the form is completed, it will be saved to your local device as well as submitted to an advocate who will forward the form to corresponding agencies based on the current address/es you indicate. Please be as detailed and accurate as you can. All information you voluntarily provide will be helpful to the receiving shelters to gauge what kind of services they can offer you. If you plan on filing for a restraining order, the portion for your relationship history will be a helpful guide for completing the letter of declaration. </p>
                <LoginForm></LoginForm>
            </BodyActual>
        </Container>
    )
}
