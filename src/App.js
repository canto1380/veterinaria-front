import "bootstrap/dist/css/bootstrap.min.css";
import clienteAxios from './config/axios'
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./common/nav/navbar";
import Login from './components/login-logup/Login'

function App() {
  /* Usuarios Admin */
  const [usuariosAdmin, setUsuariosAdmin] =useState([])
  const [consultarUsuariosAdmin, setConsultarUsuariosAdmin] = useState(true)
    /* Token */
    const [tok, setTok] = useState('');
    const [consultarToken, setConsultarToken] = useState(true)

  /* Consulta Usuarios admin */
  useEffect(() => {
      consultarAPI()
  }, [consultarUsuariosAdmin])
  
  const consultarAPI = ()=>{
    clienteAxios.get('user/listUser')
    .then(req =>{
      setUsuariosAdmin(req.data)
      console.log(req.data)
    })
    .catch( err =>{
      console.log(err)
    })
  }

  /** Almacenamiento de token **/
  useEffect(() => {
    if(localStorage.getItem('jwt')){
      const {token} = JSON.parse(localStorage.getItem('jwt'))
      setTok(token)
    } else {
      console.log('Naide inicio sesion todavia')
    }
  }, [consultarToken])
console.log(tok)
  return (
    <Router>
      <Navbar
       
      />
      <Switch>
        <Route exact path='/'>
        </Route>
        <Route exact path='/inicio-sesion'>
          <Login
           setConsultarUsuariosAdmin={setConsultarUsuariosAdmin}
           setConsultarToken={setConsultarToken}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
