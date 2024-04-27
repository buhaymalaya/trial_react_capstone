import React from 'react'
import { Container } from 'react-bootstrap'
import BodyLoggedIn from '../BodyLoggedIn'
import PostToReplyForm from '../forms/PostToReplyForm'
import ReplyForm from '../forms/ReplyForm'

export default function PostToReplyPage() {
  return (
    <Container>
        <BodyLoggedIn NavLogged>
        <PostToReplyForm />
        </BodyLoggedIn>
    </Container>
  )
}
