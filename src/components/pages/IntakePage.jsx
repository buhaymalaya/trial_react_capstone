import { Container, Stack } from "react-bootstrap";
import IntakeForm from "../forms/IntakeForm";
import NavLogged from "../NavLogged";

export default function BodyLoggedIn({ children }) {
  return (
    <Container>
        <Stack direction="vertical">
            <NavLogged />
            <IntakeForm />
            { children }
        </Stack>
    </Container>
  )
}