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
                
              
                How to Navigate [esc]?
                <br />  <br />  <br />
                Click on the Resources tab to find local/digital help now.
                <br />  <br />  <br />
                Sign up, Create a Profile, and Log in to access the Discussion Board and Intake tool.
                <br />  <br />  <br />
                Save critical documents under Profile along with intake form (autosaved).
                <br />  <br />




            </div>
    </BodyActual>
    </Container>
  )
}
