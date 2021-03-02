import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Button } from '../UI/Buttons';
import { Center } from '../UI/Center';
import Link from 'next/link'

export default function Head() {
    const [token, setToken] = useState(false)
    
    useEffect(() => {
        setToken(sessionStorage.getItem('token') ? true : false)
    }, [])
    return (
        <Header>
                <Link href={`/`}>
                    <Logo>
                        Crashcourse
                    </Logo>        
                </Link>
                <Actions>
                    { !token ?
                        <Link href={`/register`}>
                            <Button outline={true}>Registrarse gratis</Button>
                        </Link>
                            :
                        <p>Mi Perfil</p>
                    }
                </Actions>
        </Header>
    )
}

const Logo = styled.div`
    font-weight: 900;
    font-size: 20px;
    line-height: 18px;
    cursor:pointer;
`

const Actions = styled.div`
   
`
const Header = styled.header`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1152px;
    margin:0 auto;
    
`