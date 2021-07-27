import React, { Fragment, useState} from 'react';
import Personajes from './personajes'
import Navbar from './Componentes/navbar'
import Ifiltro from './icons/Filtrar.svg'
import IBuscar from './icons/Buscar.svg'

const App = () => {
    const [NameS, SetNameS] = useState('NA');
    const [Filter, SetFilter] = useState('NA');
    return ( 
        <Fragment>
            <Navbar />
            <div className="col-10 m-auto py-5 px-2">
                <div className="container">
                    <div className="col-12 col-lg-9 d-flex">
                        <h1 className="pe-5">Personajes</h1>
                        <div className="inp-buscar">
                            <input type="text" className="buscar" placeholder="Buscar" onChange={(e) => SetNameS(e.target.value)} />
                            <img src={IBuscar} id="icon-buscar" alt=""/>
                        </div>
                        <div id="divfiltro">
                            <select name="filtros" id="filtros" onChange={(e)=> SetFilter(e.target.value) }>
                                <option defaultValue="NA">Filtrar</option>
                                <option value="Female">Mujeres</option>
                                <option value="Male">Hombres</option>
                            </select>
                            <img src={Ifiltro} id="icon-filtro" alt="" />
                        </div>
                    </div>
                    <Personajes Filter={Filter} NameS={NameS}/>
                </div>
            </div>
        </Fragment>
     );
}
 
export default App;