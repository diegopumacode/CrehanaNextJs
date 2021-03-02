import React from 'react'
import styled from 'styled-components';
import { Button } from './Buttons';
import { Center } from './Center';

export default function Banner() {
    return (
        <Center responsiveFull={true}>
            <LayoutBanner>
                <TitleBanner>
                Title H2 - <br/>
                banner cursos nuevos
                </TitleBanner>
                <Button>Comprar ahora</Button>
            </LayoutBanner>
        </Center>
    )
}

const LayoutBanner = styled.section`
    height: 304px;
    background-color: var(--bg-gray-lighter);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
`

const TitleBanner = styled.h2`
    text-align: center;
    font-weight: 900;
    font-size: 2rem;
`