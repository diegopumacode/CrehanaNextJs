import React from 'react'
import { Center } from '../UI/Center'
import styled from 'styled-components';

export default function SectionHome({title,children}) {
    return (
        <Center>
            <Section>
            <Title>{title}</Title>
            {children}
            </Section>
        </Center>
    )
}
const Section = styled.section`
    padding:30px 0 20px 0;
`

const Title = styled.h4`
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 28px;
    letter-spacing: 0.1px;
    text-align: left;
    margin-bottom:26px;
`