import React from 'react'
import styled from 'styled-components'
import { Center } from '../UI/Center'
import SectionCourse from './Section'

export default function About() {
    return (
            <SectionCourse title={"¿De qué trata este curso?"}>
                <Description>
                    Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam
                    est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. 
                    Auctor tellus, in mauris mi, facilisi arc. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. 
                    Nunc nullam est in non. Enim sapien amet ut pharetra.
                    Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.
                </Description>
            </SectionCourse>
        
    )
}

const Description = styled.p`
    max-width:662px;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    margin-top:24px;
`
