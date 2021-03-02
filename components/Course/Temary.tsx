import React from 'react'
import styled from 'styled-components'
import { Center } from '../UI/Center'
import TemaryList from '../UI/TemaryList'
import SectionCourse from './Section'

export default function Temary() {
    return (
        <ContentTemary>
            
                <SectionCourse title={"Temario del curso"}>
                    <TemaryList/>
                </SectionCourse>
            
        </ContentTemary>
    )
}


const ContentTemary = styled.div`
    background: #F6F7F9;
    padding-top:80px;
    padding-bottom:40px;
    @media only screen and (max-width: 1152px) {  
        padding-top:20px;
    }
`
