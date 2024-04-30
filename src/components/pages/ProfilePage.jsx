import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import BodyLoggedIn from '../BodyLoggedIn';
// import UserDetailsTable from '../UserDetailsTable';
import ProfileForm from '../forms/ProfileForm';
import DeleteProfileForm from '../forms/DeleteProfileForm';

export default function ProfilePage() {
    const { user } = useContext(UserContext);
    const userId = user.id;
    return (
        <Container className='about-decoy'>
            <BodyLoggedIn NavLogged>
                {/* <UserDetailsTable /> */}
                <ProfileForm />
<DeleteProfileForm />       
</BodyLoggedIn>
        </Container>
    );
}
