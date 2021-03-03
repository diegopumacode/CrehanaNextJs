import React from 'react'
import styled from 'styled-components';
import Amount from './Amount';
import LegalNotes from './LegalNotes';
import ListProducts from './ListProducts';

export default function Details() {
    return (
        <ContentDetail>
            <ListProducts/>
            <Amount/>
            <DetailsMobile>
                <LegalNotes/>
            </DetailsMobile>
        </ContentDetail>
    )
}

const DetailsMobile = styled.div`
    @media only screen and (max-width: 1152px) {  
    display:none
    }
`



const ContentDetail = styled.div`
    width: 600px;
    min-height:calc(100vh - 72px);
    background: #F6F7F9;
    padding:43px 72px;
    @media only screen and (max-width: 1152px) {  
        width:100%;
        min-height:auto;
        padding: 20px 40px;
    }
`

const CardDetails = styled.div`
    display:flex;  
    gap:24px;  
    .image{
        width: 155px;
        height: 116px;
        background: #8D8D9D;
        border-radius: 10px;
        @media only screen and (max-width: 400px) {  
            width: 150px;
            height: 70px;
        }
    }

    .body{
        display:flex;
        flex-direction:column;
        justify-content:center;
        gap:8px;
        .title{
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
            color: #181B32;
        }

        .teacher{
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            color: #181B32;
        }
        .details{
            display:flex;
        }
        .info{
            display: flex;
            gap: 10px;
            margin-bottom:15px;
            .items{
                font-weight: bold;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0.1px;
                color: #8D8D9D;
                display:flex;
                align-items:center;
                gap:4px;
            }
        }
    }
`