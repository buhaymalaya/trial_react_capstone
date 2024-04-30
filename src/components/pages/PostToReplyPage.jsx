import React from 'react'
import { Container } from 'react-bootstrap'
import BodyLoggedIn from '../BodyLoggedIn'
import PostToReplyForm from '../forms/PostToReplyForm'
import EditPostForm from '../forms/EditPostForm'
import DeletePostForm from '../forms/DeletePostForm'

export default function PostToReplyPage() {
  return (
    <Container className='about-decoy'>
        <BodyLoggedIn NavLogged>
        <marquee>Click [esc] at the top left to return to decoy maze game. Do NOT use the application around your POH. Only return when safe.</marquee>

        <PostToReplyForm />
        <EditPostForm />
        <DeletePostForm />
        </BodyLoggedIn>
    </Container>
  )
}
