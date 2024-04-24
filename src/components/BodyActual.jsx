import { Container, Stack } from "react-bootstrap";

import NavActual from "./NavActual";

export default function Body({ children }) {
  return (
    <Container>
        <Stack direction="vertical">
            <NavActual />
            { children }
        </Stack>
    </Container>
  )
}