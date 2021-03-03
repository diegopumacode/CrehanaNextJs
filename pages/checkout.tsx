import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import React from 'react'
import ErrorPage from 'next/error'
import Header from '../components/Checkout/Header'
import { Center } from '../components/UI/Center'
import styled from 'styled-components';
import Payment from '../components/Checkout/Payment '
import Details from '../components/Checkout/Details'
import Pages from '../components/UI/Pages'
import Terms from '../components/Checkout/Terms'
import LegalNotes from '../components/Checkout/LegalNotes'

const Checkout = () => {
    
    return (
        <>
            <Header/>
            
            <Main>
                <ContenPages>
                    <LegalNotes/>
                </ContenPages>
                <Payment/>
                <Details/>
                <ContenPages>
                    <Pages/>
                    
                </ContenPages>
            </Main>    
            
        </>

    )
}



const ContenPages = styled.div`
    display:none;
    @media only screen and (max-width: 1152px) {  
        display:block;
        padding:20px;
    }
`

const Main = styled.main`
    display:flex;
    justify-content:space-between;
    @media only screen and (max-width: 1152px) {  
        flex-direction:column-reverse;
        gap:10px;
    }

`



export default Checkout