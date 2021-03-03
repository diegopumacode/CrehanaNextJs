import React, { useState } from 'react'
import { Layout } from '../components/Layout/Layout'
import { Center } from '../components/UI/Center'
import SessionService from '../services/SessionService'
import Router from 'next/router'
import { Button } from '../components/UI/Buttons'
import Link from 'next/link'
import styled from 'styled-components';
export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const session = new SessionService()
        let data = await session.login(username,password)
        console.log(data)
        if(data.success){
            sessionStorage.setItem("token",data.token)
            Router.push('/')

        }else{
            alert("Error de credenciales")
        }
    }

    return (
        <Layout>
            <Center>
                <h3>Login</h3>
                <small>username:crehana,password:codeable2020</small>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="">Username</label>
                        <input type="text" onChange={e => setUsername(e.target.value)} value={username} placeholder="Username" required/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Password</label>
                        <input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="Password" required/>
                    </div>
                    <Button>Ingresar</Button>
                    <Link href={`/register`}>
                        <RegisterLink>Registrarse</RegisterLink>
                    </Link>
                </form>
            </Center>
        </Layout>
    )
}


const RegisterLink = styled.a`
    cursor:pointer;
    font-weight:bold;
    color:blue;
`