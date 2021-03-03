import React from 'react'
import styled from 'styled-components';
import { Center } from '../UI/Center';
import Link from 'next/link'
export default function Header() {
    return (
        <ContentHeader>
            <Link href={`/`}>
                <Logo>Crashcourse</Logo>
            </Link>
          
        </ContentHeader>
    )
}


const Logo = styled.div`
    font-weight: 900;
    font-size: 20px;
    line-height: 18px;
    color: #FFFFFF;
    cursor:pointer;
`

const ContentHeader = styled.div`
    width:100% !important;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #181B32;
    height: 72px;
`