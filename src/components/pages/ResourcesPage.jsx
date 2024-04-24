import BodyActual from "../BodyActual";
// how to import python maze game from flask app; must convert if creating a new component
// import MazeDecoy from "./MazeDecoy";
import { Container } from "react-bootstrap";

export default function HomeActual() {
  return (
    <Container>
    <BodyActual NavActual >
    <marquee>Do NOT use the application around your POH. Only return when safe. Do NOT use the application around your POH. Only return when safe.</marquee>

    <div className='about-decoy'>
                

                RESOURCES <hr />
                NATIONAL DOMESTIC VIOLENCE HOTLINE: SPEAK/CHAT WITH AN ADVOCATE
                <br />  
                https://www.thehotline.org/ <hr />
                988 SUICIDE AND CRISIS LIFELINE
                <br />
                https://988lifeline.org/  <hr />
                211: GENERAL INFORMATION (SHELTERS, MENTAL HEALTH, IMMIGRANT HELP)
                <br />
                https://www.211.org/ <hr />
                DEPARTMENT OF SOCIAL SERVICES: FOOD STAMPS/LOW-INCOME HEALTH INSURANCE/CASH AID
                <br /> 
                [varies by state; call 211 for your specific DPSS line and website] <hr />
                STRONG HEARTS NATIVE AMERICAN HELP
                <br /> 
                http://strongheartshelpline.org/ <hr />
                WOMEN'S LAW: STATE-BY-STATE INFO ON LAWS INCLUDING RESTRAINING ORDERS/CHILD CUSTODY
                <br />
                https://www.womenslaw.org/ <hr />
               
                ABUSED DEAF WOMEN'S ADVOCACY SERVICES (ADWAS)
                <br />
                INFO ON HOW TO SEEK SUPPORT: https://www.youtube.com/watch?v=ql7zD8X80wE
                <br /> <br />




            </div>
    </BodyActual>
    </Container>
  )
}
