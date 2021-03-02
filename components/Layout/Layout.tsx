import React, { ReactComponentElement } from 'react'
import styled from 'styled-components';
import { Center } from '../UI/Center';
import Head from './Header';

export const Layout = ({children}) => {
    return (
        <>
            <Head/>
            <Main>
                {children}
            </Main>
        </>
    )
}

const Main = styled.main`
    
`
