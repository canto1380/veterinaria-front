import React, { useState } from 'react';
import {withRouter } from 'react-router-dom'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../../css/login.css'
import '../../css/App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faYoutube, faWhatsapp, faGoogle } from "@fortawesome/free-brands-svg-icons";
import FacebookLogin from 'react-facebook-login'
import MsjError from '../mensajes/MsjError';
import clienteAxios from '../../config/axios'
import { authenticate } from '../../helpers/helper';
import { signin } from '../../helpers/consultasAPI';

const Login = (props) => {
    const [err, setErr] = useState(false)
    const [usuario, setUsuario] = useState({
        email: '',
        clave: ''
    })
    const [mail, setMail] = useState("")

    const responseFacebook = (response) => {
        setMail(response.email)
        console.log(mail)
    }

    const handleValores = e => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }   
    const handleSubmit = async (e) => {
        e.preventDefault()
        signin(usuario)
        .then((data) =>{
            if(data.error) {
                setErr(true);
            setTimeout(() => {
              setErr(false);
            }, 3000);
            } else {
                authenticate(data, () => {
                    setUsuario({
                      ...usuario,
                    });
                  });
                setErr(false);
                props.history.push(`/`);
            }
        })
        // clienteAxios.post('/user/signin', usuario)
        // .then(req => {
        //     authenticate(data, ()=>{
        //         setUsuario({
        //             ...usuario
        //         })
        //     })
        //     props.setConsultarUsuariosAdmin(true)
        //     props.history.push('/')
        // })
        // .catch(error =>{
        //     setTimeout(() => {
        //         setErr(false)
        //     }, 3000);
        // })
    }

    return (
        <Container className="">
            <Row className="my-4 d-flex justify-content-center">
                <Col className="border border-4 rounded box-login my-3" xs={10} sm={6}>
                    <h1 className="text-center mt-3">Bienvenido!</h1>
                    <div className="text-center my-4 mx-5">
                        <h5 className="mb-4">Ingrese con su cuenta</h5>
                        <div>
                            <Button className="w-100 btn-google fw-bold align-center">
                                <FontAwesomeIcon
                                    icon={faGoogle}
                                    className=""
                                    size="2x"
                                ></FontAwesomeIcon>oogle</Button>
                        </div>
                        <div className="my-3">
                            <div>
                                <Button className="w-100 btn-facebook fw-bold">
                                    <FontAwesomeIcon
                                        icon={faFacebookF}
                                        className=""
                                        size="2x"
                                    ></FontAwesomeIcon>acebook</Button>
                                <FacebookLogin
                                    appId="505697203816090"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={responseFacebook} />,
                            </div>
                        </div>
                    </div>
                    <div className="my-5 mx-5">
                        <h5 className='mb-4 text-center'>Ingrese con su email</h5>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name='email'
                                    onChange={handleValores}
                                    placeholder="nombreprueba@gmail.com" />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contrasena</Form.Label>
                                <Form.Control
                                    name="clave"
                                    onChange={handleValores}
                                    type="password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Recordarme" />
                            </Form.Group>
                            <Button variant="primary" className="w-100 fw-bold" type="submit">
                                Ingresar
                            </Button>
                        </Form>
                        {
                            (err) ? (<MsjError/>) : null
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default withRouter(Login);