import React, { useState } from 'react'
import { Layout } from '../components/Layout/Layout'
import { Center } from '../components/UI/Center'
import SessionService from '../services/SessionService'
import Router from 'next/router'
import { Button } from '../components/UI/Buttons'
import Link from 'next/link'
import styled from 'styled-components';

export default function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const session = new SessionService()
        let data = await session.register(username,email,password1,password2)
        console.log(data)
        if(data.success){
            sessionStorage.setItem("token",data.token)
            Router.push('/')

        }else{
            if (data.errors.password2) alert("La contreña no coincide")
            if (data.errors.password2.length > 0 ) alert("Ingrese una contraseña Correcta")
        }
    }

    return (
        <Layout>
            <Center>
                <h3>Regitrarse</h3>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="">Username</label>
                        <input type="text" onChange={e => setUsername(e.target.value)} value={username} placeholder="Username" required/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Correo Electronico</label>
                        <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="Correo Electronico" required/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Contraseña</label>
                        <input type="password" onChange={e => setPassword1(e.target.value)} value={password1} placeholder="Password" required/>
                        <small>Minimo 8 caracteres</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Verificar tu Contraseña</label>
                        <input type="password" onChange={e => setPassword2(e.target.value)} value={password2} placeholder="Password" required/>
                        <small>Minimo 8 caracteres</small>
                    </div>
                    
                    <Button>Registrarse</Button>
                    <Link href={`/login`}>
                        <LoginLink>Iniciar Sesion</LoginLink>
                    </Link>
                </form>
            </Center>
        </Layout>
    )
}


const LoginLink = styled.a`
    cursor:pointer;
    font-weight:bold;
    color:blue;
`