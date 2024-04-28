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
        <PostToReplyForm />
        <EditPostForm />
        <DeletePostForm />
        </BodyLoggedIn>
    </Container>
  )
}
