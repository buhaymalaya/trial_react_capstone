import BodyDecoy from "../BodyDecoy";
// how to import python maze game from flask app; must convert if creating a new component
// import MazeDecoy from "./MazeDecoy";
import { Container } from "react-bootstrap";
import MazeGameComponent from "../MazeGameComponent";

export default function HomeDecoy() {
  return (
    <Container>
    <BodyDecoy NavDecoy >
       <MazeGameComponent />
    </BodyDecoy>
    </Container>
  )
}
