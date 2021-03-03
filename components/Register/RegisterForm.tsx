import React, { useState } from 'react'

import Router from 'next/router'
import styled from 'styled-components';
import { Button } from '../UI/Buttons';
import SessionService from '../../services/SessionService';
import { FormStyled } from '../UI/Form';

export default function RegisterForm() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const session = new SessionService()
        let data = await session.login(username,password)
        console.log(data)
        if(data.success){
            sessionStorage.setItem("token",data.token)
            Router.push('/')

        }
    }
    return (
        <FormStyled onSubmit={handleSubmit}>
            <h3>Registrarse</h3>
            <div className="form-control">
                <label htmlFor="Username">Username</label>
                <input type="text" onChange={e => setUsername(e.target.value)} value={username} placeholder="Username" />
            </div>
            <div className="form-control">
                <label htmlFor="Username">Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
            </div>
            <Button>Ingresar</Button>
        </FormStyled>


    )
}
