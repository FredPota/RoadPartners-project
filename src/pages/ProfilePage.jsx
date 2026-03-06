import { useNavigate } from 'react-router-dom';

function ProfilePage() {

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }

    return (
        <div>
            <img src="vite.svg" alt="profile-picture" />
            <h1>Profile Page</h1>
            <p>This is the profile page.</p>
            <button onClick={goToHome}>Regresar a la HomePage</button>
        </div>
    );
}

export default ProfilePage;