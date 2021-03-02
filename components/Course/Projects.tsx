import React from 'react'
import styled from 'styled-components'
import { Center } from '../UI/Center'
import SectionCourse from './Section'


export default function Projects() {
    return (
        
            <SectionCourse title={"Proyectos del curso"}>

                <ContentProjects>
                    <div className="item large">
                        <User>

                            <div className="avatar">

                            </div>
                            <p className="username">user_name</p>
                        </User>
                    </div>
                    <div className="item">
                        <User>
                            <div className="avatar">

                            </div>
                            <p className="username">user_name</p>
                        </User>
                    </div>
                    <div className="item">
                        <User>

                            <div className="avatar">

                            </div>
                            <p className="username">user_name</p>
                        </User>
                    </div>
                    <div className="item">
                        <User>

                            <div className="avatar">

                            </div>
                            <p className="username">user_name</p>
                        </User>
                    </div>
                    <div className="item add">
                        <Number>+07</Number>
                    </div>
                </ContentProjects>
            </SectionCourse>
        
    )
}

const Number = styled.div`
    color:white;
    font-weight: 800;
    font-size: 52px;
    line-height: 60px;
`

const User = styled.div`
    position:absolute;
    bottom:16px;
    left:16px;
    display:flex;
    align-items:center;
    gap:8px;
    .avatar{
        width:24px;
        height:24px;
        background: #181B32;
        border-radius:50%;
    }
    .username{
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
    }
`

const ContentProjects = styled.div`
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;
    
    grid-auto-rows:150px;
    margin:32px 0;
    gap:20px;
    box-sizing: border-box;
    
    .item{
        border-radius: 10px;
        background: #8D8D9D;
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .add{
        background:#181B32
    }

    .large{
        grid-row-end: span 2;
        grid-column-end: span 2;
    }

    @media only screen and (max-width: 1152px) { 
        grid-auto-flow: column;

        box-sizing: border-box;
        grid-template-columns: repeat(10, 150px);
        grid-auto-rows: 150px;
        overflow-x: scroll;
        overflow-y: hidden;
        height:200px;
        .large{
            grid-row-end: span 1;
            grid-column-end: span 1;
        }
    }
`
