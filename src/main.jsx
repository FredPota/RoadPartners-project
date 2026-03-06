import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/loginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import SignInPage from './pages/SignInPage.jsx'

//Rutas de cada pagina del proyecto
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> }, //Ruta de la pagina de inicio
  { path: "/login", element: <LoginPage /> }, //Ruta de la pagina de inicio de sesión
  { path: "/profile", element: <ProfilePage /> }, //Ruta de la pagina de perfil
  { path: "/signin", element: <SignInPage /> }, //Ruta de la pagina de registro
]); //Agrega más rutas según sea necesario

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
