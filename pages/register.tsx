import React, { useState } from 'react'
import { Layout } from '../components/Layout/Layout'
import { Center } from '../components/UI/Center'
import SessionService from '../services/SessionService'
import Router from 'next/router'

export default function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(username)
        console.log(password)
        const session = new SessionService()
        let data = await session.login(username,password)
        console.log(data)
        if(data.success){
            sessionStorage.setItem("token",data.token)
            Router.push('/')

        }
    }

    return (
        <Layout>
            <Center>

            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setUsername(e.target.value)} value={username}/>
                <input type="password" onChange={e => setPassword(e.target.value)} value={password}/>
                <button>Login</button>
            </form>
            </Center>
        </Layout>
    )
}
