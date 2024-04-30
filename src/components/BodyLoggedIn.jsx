import { Container, Stack } from "react-bootstrap";

import NavLogged from "./NavLogged";

export default function BodyLoggedIn({ children }) {
  return (
    <Container>
        <Stack direction="vertical">
            <NavLogged />
            {/* <p className="about-decoy">You are now logged in.</p> */}
            { children }
        </Stack>
    </Container>
  )
}