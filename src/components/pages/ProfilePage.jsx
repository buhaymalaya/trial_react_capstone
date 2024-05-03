import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import BodyLoggedIn from '../BodyLoggedIn';
// import UserDetailsTable from '../UserDetailsTable';
import ProfileForm from '../forms/ProfileForm';
import DeleteProfileForm from '../forms/DeleteProfileForm';
import NavLogged from '../NavLogged'
import ShowProfileForm from '../forms/ShowProfileForm';

export default function ProfilePage() {
    const { user } = useContext(UserContext);
    const userId = user.id;
    return (
        <Container className='about-decoy'>
            <NavLogged />
            <marquee>Click [esc] at the top left to return to decoy maze game. Do NOT use the application around your POH. Only return when safe.</marquee>
            <ShowProfileForm />
            <ProfileForm />
            <DeleteProfileForm />
        </Container>
    );
}
