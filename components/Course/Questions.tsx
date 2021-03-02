import React from 'react'
import styled from 'styled-components'
import { Center } from '../UI/Center'
import SectionCourse from './Section'

export default function Questions() {
    return (

        <SectionCourse title={"Preguntas frecuentes"}>
            <Content>
                <details>
                    <summary>Pregunta 1</summary>
                    <div className="content">
                        <p>Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi,
                            mauris aliquam phasellus quis semper diam fringilla. </p>
                    </div>
                </details>
                <details>
                    <summary>Pregunta 2</summary>
                    <div className="content">
                        <p>Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi,
                            mauris aliquam phasellus quis semper diam fringilla. </p>
                    </div>
                </details>
                <details>
                    <summary>Pregunta 3</summary>
                    <div className="content">
                        <p>Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi,
                            mauris aliquam phasellus quis semper diam fringilla. </p>
                    </div>
                </details>
            </Content>
        </SectionCourse>

    )
}

const Content = styled.div`

details{
    margin:20px 0;
    max-width:660px;
        cursor:pointer;
        border:1px solid red;
        background: #FFFFFF;
    
        
        border: 1px solid #E8EAF0;
        box-sizing: border-box;
        border-radius: 10px;
        padding:24px;

        .content{
            margin-top:20px;
        }
        
    }
    summary{
        display: flex;
        justify-content: space-between;
        outline:none;
        font-weight:bold;
    }
    details>summary::-webkit-details-marker {
        display: none;
      }
      
    details>summary::after {
        content: '\f078';
        background-image: url('https://www.flaticon.com/svg/vstatic/svg/57/57150.svg?token=exp=1614706370~hmac=a636f7270b1663cb2ee8a6114fd0c4a2');
        background-size: 10px 20px;
        display: inline-block;
        width: 10px; 
        height: 20px;
        content:"";
    }
    
    details[open]>summary::after {

     
        background-image: url('https://www.flaticon.com/svg/vstatic/svg/57/57056.svg?token=exp=1614706190~hmac=764b731fe9edf5acb859ecb2cbfa2c65');
        background-size: 10px 20px;
        display: inline-block;
        width: 10px; 
        height: 20px;
        content:"";
    }
    
    
`
