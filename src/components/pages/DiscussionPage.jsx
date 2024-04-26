import BodyLoggedIn from '../BodyLoggedIn'
import Posts from "../Posts";
import PostForm from '../forms/PostForm';
import { Container } from 'react-bootstrap';

export default function DiscussionPage() {
  return (
    <Container className="about-decoy">
    <BodyLoggedIn NavLogged>
        <PostForm>
          </PostForm>
        <Posts>
          </Posts>
    </BodyLoggedIn>
    </Container>
  )
}