import { useState } from 'react';
import { Container } from 'react-bootstrap';
import BodyLoggedIn from '../BodyLoggedIn';
import Posts from '../Posts';
import PostForm from '../forms/PostForm';
import SearchForm from '../forms/SearchForm';

export default function DiscussionPage() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (keyword) => {
      try {
          const res = await fetch(`https://capstone-draft-flask.onrender.com/post/search?keyword=${keyword}`);
          if (res.ok) {
              const data = await res.json();
              setSearchResults(data);
          } else {
              console.error('Failed to fetch search results:', res.statusText);
          }
      } catch (error) {
          console.error('Failed to fetch search results:', error.message);
      }
  };
  

    return (
        <Container className="">
            <BodyLoggedIn NavLogged>
            <marquee>Click [esc] at the top left to return to decoy maze game. Do NOT use the application around your POH. Only return when safe.</marquee>
            <SearchForm onSearch={handleSearch} />
                <PostForm />
                
                <Posts posts={searchResults} />
            </BodyLoggedIn>
        </Container>
    );
}
