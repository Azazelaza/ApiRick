import React from 'react'
import Logo from '../imagenes/logo.png'
const Navbar = () => {
    return (
        <div className="container-pers">
        <nav className="navbar nav-pers col-lg-10 col-12">
            <div className="container-fluid">
                <div className="col-2 col-lg-6">
                    <img src={Logo} className="logo col-12 col-lg-3" alt="Logo del API" />
                </div>
                <div className="col-10 col-lg-6 d-flex">
                    <p className="txt-gris p-auto cabezal">Inicio</p>
                    <p className="txt-gris p-auto cabezal">Historia</p>
                    <p className="txt-gris p-auto cabezal">Capítulos</p>
                    <p className="txt-gris p-auto cabezal active">Personajes</p>
                    <p className="txt-gris p-auto cabezal">Objetos</p>
                    <p className="txt-gris p-auto cabezal">Dimensiones</p>
                    <p className="txt-gris p-auto cabezal">Comunidad</p>
                </div>
            </div>
        </nav>
        </div>
    )
}
export default Navbar;
