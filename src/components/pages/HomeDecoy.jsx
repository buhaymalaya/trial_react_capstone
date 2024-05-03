import BodyDecoy from "../BodyDecoy";
// how to import python maze game from flask app; must convert if creating a new component
// import MazeDecoy from "./MazeDecoy";
import { Container } from "react-bootstrap";
// import MazeGameComponent from "../MazeGameComponent";

export default function HomeDecoy() {
  return (
    <Container>
      
    <BodyDecoy NavDecoy >
    <p style={{ textAlign: 'center' }}>Press 'Run' to play the maze.</p>
    <p style={{ textAlign: 'center' }}>Click 'Stop' to refresh.</p>

      <Container className="about-decoy" style={{ width: '550px', height: '420px', overflow: 'hidden' }}>

      <iframe src="https://trinket.io/embed/pygame/9f0dfcef73?outputOnly=true" width="80%" height="370" frameBorder="0" marginwidth="0" marginHeight="0" allowFullscreen style={{ position: 'relative', left: '2px', top: '15px' }}></iframe>

      {/* <MazeDecoy /> */}
       {/* <MazeGameComponent /> */}
       </Container>
    </BodyDecoy>
    </Container>
  )
}
