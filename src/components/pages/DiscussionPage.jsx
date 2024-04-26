import BodyActual from '../BodyActual'
import Posts from "../Posts";
import PostForm from '../forms/PostForm';

export default function DiscussionPage() {
  return (
    <BodyActual NavActual>
        <PostForm />
        <Posts />
    </BodyActual>
  )
}