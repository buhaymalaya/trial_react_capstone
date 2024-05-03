import BodyActual from "../BodyActual";
import { Container } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";

export default function IntakeLoginPage() {
    return (
        <Container>
            <BodyActual NavActual >
            <marquee>Click [esc] at the top left to return to decoy maze game. Do NOT use the application around your POH. Only return when safe.</marquee>
                <hr /><p>The Intake Form Tool will help expedite the process of connecting a DV survivor (who is actively seeking safe refuge) to a DV shelter or safehouse by sending this completed form to multiple DV agencies at once. When the form is completed, it will be saved to your local device as well as submitted to an advocate who will forward the form to corresponding agencies based on the current address/es you indicate on the form. <br /> <br /> 
                Please be as detailed and accurate as you can. All information you voluntarily provide will be helpful for the receiving shelters to gauge what kind of services they can offer you. If you plan on filing for a restraining order, the portion for your relationship history will be a helpful guide for completing the letter of declaration. 
                <br /> <br />
                NOTE: The completion of this form may take 1 to 2 hours depending on the amount of information you share. Ensure that you are in a safe location for the specified amount of time.</p>
                <LoginForm></LoginForm>
            </BodyActual>
        </Container>
    )
}
