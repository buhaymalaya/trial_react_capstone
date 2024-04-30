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

      <Container className="about-decoy" style={{ width: '450px', height: '420px', overflow: 'hidden' }}>

      <iframe src="https://trinket.io/embed/pygame/9f0dfcef73?outputOnly=true" width="80%" height="380" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen style={{ position: 'relative', left: '0px', top: '10px' }}></iframe>

      {/* <MazeDecoy /> */}
       {/* <MazeGameComponent /> */}
       </Container>
    </BodyDecoy>
    </Container>
  )
}
