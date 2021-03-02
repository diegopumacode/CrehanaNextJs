import React from 'react'
import styled from 'styled-components'

export default function TemaryList() {
    return (
        <ContentTemaryList>
            <ul>
                <p className="title">Introducción</p>
                <li>
                    1. Un cuento de superación con todo
                </li>
                <li>
                    2. El no ilustrador
                </li>
                <li>
                    3. Break 1: Súbete al robot
                </li>
            </ul>
            <ul>
                <p className="title">Bildungsroman</p>
                <li>
                    4. Objetivo de Branding
                </li>
                <li>
                    5. Público Objetivo
                </li>
                <li>
                    6. Selecciona tu Red Social
                </li>
            </ul>
            <ul>
                <p className="title">¿Qué hacer con tu vida?</p>
                <li>
                    4. Objetivo de Branding
                </li>
                <li>
                    5. Público Objetivo
                </li>
                <li>
                    6. Selecciona tu Red Social
                </li>
            </ul>
        </ContentTemaryList>
    )
}

const ContentTemaryList = styled.div`
    margin-top:24px;
    display:flex;
    flex-direction:column;
    gap:28px;
    ul{
        
        list-style:none;
        display:flex;
        flex-direction:column;
        gap:12px;

        .title{
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.10000000149011612px;
            text-align: left;
        }
    }
`
