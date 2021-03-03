import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Button } from '../UI/Buttons';
import { Center } from '../UI/Center';
import Link from 'next/link'
import CartService from '../../services/CartService';
import useLocalStorage from '../../hook/UseSessionStorage';

export default function Head() {


    const [token, setToken] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        setToken(sessionStorage.getItem('token'))
    }, [token])

    const renderList =()=>{
        return   !token ?
                        <Link href={`/register`}>
                            <Button outline={true}>Registrarse gratis</Button>
                        </Link>
                        :
                        <UserActions>
                            <Link href={`/checkout`}>
                                <MyProfile>Carrito</MyProfile>
                            </Link>
                            <MyProfile>Mi Perfil</MyProfile>
                        </UserActions>
    }
    return (
        <Header>
                <Link href={`/`}>
                    <Logo>
                        Crashcourse
                    </Logo>        
                </Link>
                <Actions>
                    { token == '' ? "" : renderList()}
                </Actions>
        </Header>
    )
}

const UserActions = styled.div`
    display:flex;
    gap:20px;
`

const MyProfile = styled.div`
    font-weight:bold;
    cursor:pointer;
`

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
    
    @media only screen and (max-width: 1152px) {  
        padding-left:${ props => !props.responsiveFull ? "30px" : "" };
        padding-right:${ props => !props.responsiveFull ? "30px" : "" };
    }
`