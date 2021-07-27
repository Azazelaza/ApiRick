import React, {Fragment, useEffect, useState } from 'react';
import IHActive from './icons/hearta.svg'
import IHInactive from './icons/hearti.svg'
const Personajes = ({NameS, Filter}) => {
    
    const [Caracteres, SetCaracteres] = useState();
    const [Modal, SetModal] = useState(); 

    useEffect(() => {
        SetModal({
            image:"NA",
            name:"NA",
            species:"NA",
            gender:"NA",
            age:"NA",
            status:"NA"
        } ) 
    }, [])
    
        useEffect(() => {
            fetch("https://rickandmortyapi.com/api/character")
                .then(response => response.json())
                .then(data => {
                    SetCaracteres ([data.results])
                })
        }, [])
        if(NameS !== "NA" && NameS !== ""){
            return(
            <div className="row d-flex">{
                Caracteres[0].filter(Caracter => Caracter.name.includes(NameS)).map(filtrado => {
                    return(
                        <div className="col-12 col-sm-6 col-lg-4" key={filtrado.id}>
                            <div className={filtrado.id + "card card-pers d-flex"} onClick={()=>{
                            document.getElementById('modal-caracteres').style.display = "block"
                        }}>
                                <img className="imagen-caracter" src={filtrado.image} alt="" />
                                <div className="cont-card-pers">
                                    <div className="d-flex">
                                        <h2> {filtrado.name}</h2>
                                    </div>
                                    <p className="cabezal verde">Estado</p>
                                    <p className="detalles">{filtrado.status}</p>
                                    <p className="cabezal verde">Especie</p>
                                    <p className="detalles">{filtrado.species}</p>
                                    <p className="cabezal verde">Genero</p>
                                    <p className="detalles">{filtrado.gender}</p>
                                </div>
                            </div>
                        </div>
                    )}
                )}
                </div>
            );
        }

        if(Filter !== "NA"){
            return(
                <div className="row d-flex">{
                Caracteres[0].filter(Caracter => Caracter.gender.includes(Filter)).map(filtrado => {
                    return(
                        <div className="col-12 col-sm-6 col-lg-4" key={filtrado.id}>
                            <div className={filtrado.id + "card card-pers d-flex"} onClick={()=>{
                            document.getElementById('modal-caracteres').style.display = "block"
                        }}>
                                <img className="imagen-caracter" src={filtrado.image} alt="" />
                                <div className="cont-card-pers">
                                    <div className="d-flex">
                                        <h2> {filtrado.name}</h2>
                                        {/* <img class="corazon" src={IHActive}/> */}
                                    </div>
                                    <p className="cabezal verde">Estado</p>
                                    <p className="detalles">{filtrado.status}</p>
                                    <p className="cabezal verde">Especie</p>
                                    <p className="detalles">{filtrado.species}</p>
                                    <p className="cabezal verde">Genero</p>
                                    <p className="detalles">{filtrado.gender}</p>
                                </div>
                            </div>
                        </div>
                    )}
                )}
                </div>
            );
        }

        if(Caracteres !== undefined){
        return ( 
            <Fragment> 
            <div className="row d-flex">
                {
                    Caracteres[0].map( Caracteres =>{
                        return (
                            <div className="col-12 col-sm-6 col-lg-4" key={Caracteres.id}>
                                <div className={Caracteres.id + "card card-pers d-flex"} onClick={()=>{
                                document.getElementById('modal-caracteres').style.display = "block"
                                SetModal(Caracteres);
                            }}>
                                    <img className="imagen-caracter" src={Caracteres.image} alt="" />
                                    <div className="cont-card-pers">
                                        <div className="d-flex">
                                            <h2> {Caracteres.name}</h2>
                                            {/* <img class="corazon" src={IHActive}/> */}
                                        </div>
                                        <p className="cabezal verde">Estado</p>
                                        <p className="detalles">{Caracteres.status}</p>
                                        <p className="cabezal verde">Especie</p>
                                        <p className="detalles">{Caracteres.species}</p>
                                        <p className="cabezal verde">Genero</p>
                                        <p className="detalles">{Caracteres.gender}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
                <div id="modal-caracteres">
                    <div id="modal-dispair" onClick={()=>{
                                    document.getElementById('modal-caracteres').style.display = "none"
                                }}>
                    </div>
                    <div className="modal-contain d-flex">
                        <img src={Modal.image} alt="" id="modal-image"/>
                        <div className="modal-texto">
                            <h1>{Modal.name}</h1>
                            <p className="cabezal negro">{Modal.species} | {Modal.gender} | {Modal.age} | {Modal.status}</p>
                            <p className="detalles"> No se encontro la descripcion dentro de la API </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
    else {
        return(
            <h1>Loading...</h1>
        )
    }
}
 
export default Personajes;