import { Container, Stack } from "react-bootstrap";
import IntakeForm from "../forms/IntakeForm";
import NavLogged from "../NavLogged";

export default function BodyLoggedIn({ children }) {
  return (
    <Container>
      
        <Stack direction="vertical">
            <NavLogged />
            <marquee>Click [esc] at the top left to return to decoy maze game. Do NOT use the application around your POH. Only return when safe.</marquee>

            <IntakeForm />
            { children }
        </Stack>
    </Container>
  )
}