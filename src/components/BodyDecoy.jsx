
import { Container, Stack } from "react-bootstrap";

import NavDecoy from "./NavDecoy";

export default function Body({ children }) {
  return (
    <Container>
        <Stack direction="vertical">
            <NavDecoy />
            { children }
        </Stack>
    </Container>
  )
}
