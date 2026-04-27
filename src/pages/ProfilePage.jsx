import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/header.jsx';
import PaymentForm from '../components/payment-form';
import TravelHistory from '../components/travelhistory.jsx';
import ChangePassword from '../components/change-password.jsx';
import VerifyProfile from '../components/verifyProfile.jsx';
import PayMethodsList from '../components/payMethodsList.jsx';
import CarSection from '../components/carSection.jsx';
import '../assets/loginPage.css';
import '../assets/containers.css';

function ProfilePage() {

    const [activeSection, setActiveSection] = useState('personalInfo');
    const [isEditing, setIsEditing] = useState('');
    const [cardAction, setCardAction] = useState('');
    const [userCars, setUserCars] = useState([]);
    const [userTravels, setUserTravels] = useState([]);
    const [userCars, setUserCars] = useState([]);
    const [userTravels, setUserTravels] = useState([]);

    const navigate = useNavigate();

    // 🟢 usuario desde localStorage
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    // 🔥 estados editables
    const [correo, setCorreo] = useState(user?.correo || "");
    const [telefono, setTelefono] = useState(user?.telefono || "");

    // 🔐 LOGOUT
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        console.log("🚪 Sesión cerrada correctamente");
        navigate("/login");
    };

    // ✏️ ACTUALIZAR USUARIO
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            const res = await fetch("http://localhost:3000/usuario", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                body: JSON.stringify({
                    correo,
                    telefono
                })
            });

            const data = await res.json();

            console.log("✅ ACTUALIZADO:", data);

            // 🔥 actualizar estado y localStorage
            setUser(data.usuario);
            localStorage.setItem("user", JSON.stringify(data.usuario));

            alert("Datos actualizados");

            setIsEditing('');

        } catch (error) {
            console.error("❌ ERROR:", error);
        }
    };

    const getUserCars = async (e) => {

        e.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'));
        const apiUrl = `http://localhost:3000/getCarsByDriver/${user._id}`;

        try {
            console.log('Obteniendo autos del usuario con ID:', user._id);
            const response = await fetch(apiUrl , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}`
                }
            });

            const data = await response.json();
            console.log('Carros del usuario:', data);
            setActiveSection('carProfile');
            setUserCars(data);
            return data;

        } catch (error) {
            console.error('Error al obtener los autos del usuario:', error);
            alert('No se pudo obtener la información de tus autos. Por favor, intenta nuevamente más tarde.');
            return [];
        }
    };

    const getUserTravels = async (e) => {
        e.preventDefault();

        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const apiUrl = `http://localhost:3000/getTravelsByDriver/${user._id}`;
            console.log('Obteniendo viajes del usuario con ID:', user._id);
            const response = await fetch(apiUrl , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error al obtener los viajes del usuario');
            }
            console.log('Viajes del usuario:', data);
            setActiveSection('travelHistory');
            setUserTravels(data);
            return data;
        } catch (error) {
            console.error('Error al obtener los viajes del usuario:', error);
            alert('No se pudo obtener la información de tus viajes. Por favor, intenta nuevamente más tarde.');
            return [];
        }
    };


    return (
        <div>
            <Header />
            <div className="profile-page">
                <nav className="nav-profile">
                    <button className="menu-profile-btn" onClick={() => setActiveSection('personalInfo')}>Info</button>
                    <button className="menu-profile-btn" onClick={getUserCars}>Car</button>
                    <button className="menu-profile-btn" onClick={getUserTravels}>Hist</button>
                </nav>

                <div id="profile-container">

                    {/* 👤 NOMBRE */}
                    <div className="flex flex-row gap-5" id="profile-header">
                        <img className='aspect-square w-40 p-5 rounded-full bg-PageLight-950' src="usuario.png" alt="profile-picture" />
                        <h1 className="text-6xl">
                            {user ? user.nombre : "Usuario"}
                        </h1>
                    </div>

                    {/* 🔹 INFO PERSONAL */}
                    {activeSection === 'personalInfo' && (
                        <div>
                            <div className="text-left" id="profile-content">

                                <p className='subtitle-form bg-[#eaffff] -top-4'>Información Personal</p>

                                {isEditing === 'info' ? (
                                    <form className="flex flex-col gap-4" onSubmit={handleUpdate}>

                                        <div className='login-group'>
                                            <label>Email:</label>
                                            <input 
                                                className="input-form"
                                                type="email"
                                                value={correo}
                                                onChange={(e) => setCorreo(e.target.value)}
                                            />
                                        </div>

                                        <div className='login-group'>
                                            <label>Teléfono:</label>
                                            <input 
                                                className="input-form"
                                                type="tel"
                                                value={telefono}
                                                onChange={(e) => setTelefono(e.target.value)}
                                            />
                                        </div>

                                        <button className="btnSubmit-form" type="submit">
                                            Guardar Cambios
                                        </button>

                                    </form>
                                ) : (
                                    <>
                                        <p>Email: {user?.correo}</p>
                                        <p>Teléfono: {user?.telefono}</p>
                                    </>
                                )}

                                <nav className="nav-btns gap-1"> 
                                    <button className="profile-btn" onClick={() => setIsEditing('verify')}>
                                        Verificar Perfil
                                    </button>

                                    <button className="profile-btn" onClick={() => setIsEditing('info')}>
                                        Editar Información Personal
                                    </button>

                                    <button className="profile-btn" onClick={() => setIsEditing('password')}>
                                        Cambiar Contraseña
                                    </button>

                                    <button className="profile-btn" onClick={handleLogout}>
                                        Cerrar Sesión
                                    </button>
                                </nav>

                            </div>
                        </div>
                    )}

                    {/* 🔐 CAMBIO DE CONTRASEÑA */}
                    {isEditing === 'password' && (
                        <ChangePassword setisEditing={setIsEditing} />
                    )}

                    {/* 🔹 VERIFICACIÓN */}
                    {isEditing === 'verify' && (
                        <VerifyProfile setisediting={setIsEditing} />
                    )}

                    {/* 🔹 OTROS */}
                    {activeSection === 'paymentMethods' && (
                        <div className="flex flex-col h-full gap-10">
                            <PayMethodsList cardaction={cardAction} setcardaction={setCardAction} />

                            {cardAction === 'add' && (
                                <div className='modal-overlay'>
                                    <div className="flex h-auto w-auto p-15 rounded-3xl bg-[#262626]">
                                        <PaymentForm cardmodal={cardAction} setcardmodal={setCardAction} />
                                    </div>
                                </div>
                            )}

                            {cardAction === 'edit' && (
                                <div className='modal-overlay'>
                                    <div className="flex h-auto w-auto p-15 rounded-3xl bg-[#262626]">
                                        <PaymentForm cardmodal={cardAction} setcardmodal={setCardAction} />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {activeSection === 'travelHistory' && <TravelHistory travelList={userTravels} />}
                    {activeSection === 'carProfile' && <CarSection user={user} cars={userCars} /> }

                </div>
            </div>
        </div>
    );
}

export default ProfilePage;