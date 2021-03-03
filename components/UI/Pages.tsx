import React from 'react'
import styled from 'styled-components';

export default function Pages() {
    return (
        <ContentPages>
            <ul>
                <li>
                    <p className="number">1</p>
                    <p>Proceso de Pago</p>
                </li>
                <li className="not-selected">
                    <i className="fas fa-angle-right"></i>
                    <p className="number">2</p>
                    <p>Paso 2</p>
                </li>
                <li className="not-selected no-responsive">
                    <i className="fas fa-angle-right"></i>
                    <p className="number">3</p>
                    <p>Paso 3</p>
                </li>
            </ul>
        </ContentPages>
    )
}



const ContentPages = styled.div`

    ul{
        
        display:flex;
        list-style:none;
        
        .not-selected{
            color: #DFE1E6;

            Number{
                color: #DFE1E6;
            }
        }

        .no-responsive{
            @media only screen and (max-width: 1152px) {  
                display:none;
                
            }
        }

        li{
            display:flex;
            gap:5px;
            align-items:center;
            justify-content:center;
            .number{
                color:white;
                background: #181B32;
                width:20px;
                height:20px;
                border-radius:50%;
                display:flex;
                justify-content:center;
                align-items:center;
                font-size: 14px;
            }
            i{
                margin-left:10px;
                margin-right:10px
            }
        }

    }
`
