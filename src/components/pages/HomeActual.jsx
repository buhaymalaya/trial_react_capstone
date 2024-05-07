import BodyActual from "../BodyActual";
// how to import python maze game from flask app; must convert if creating a new component
// import MazeDecoy from "./MazeDecoy";
import { Container } from "react-bootstrap";

export default function HomeActual() {
  return (
    <Container>
    <BodyActual NavActual >
    <marquee>Click [esc] at the top left to return to decoy maze game. Do NOT use the application around your POH. Only return when safe.</marquee>

    <div className='about-decoy'>
                
              
                How to Navigate [esc]?
                <br />  <br />  <br />
                Click on the RESOURCES tab to find local/digital help now.
                <br />  <br />  <br />
                SIGN UP and LOG IN to access the DISCUSS and INTAKE tool.
                <br />  <br />  <br />
                Log in and visit each tab for more info.
                <br />  <br />

                <hr />
                Questions/Feedback: esc.advocate@gmail.com


            </div>
    </BodyActual>
    </Container>
  )
}
