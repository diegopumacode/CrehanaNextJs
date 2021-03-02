import React from 'react'
import styled from 'styled-components';
import ReactStars from "react-rating-stars-component";

export default function Slice({ porcent = 10 ,stars =1}) {
    const ContentSlice = styled.div`
    width:241px;
    height: 4px;
    background: #F6F7F9;
    
    .line{
        width:${porcent}%;
        height: 4px;
        background-color:black;
    }
    @media only screen and (max-width: 500px) {  
        width:100px;
    }
    `
    
    const ContainerSlice = styled.div`
        display:flex;
        align-items:center;
        gap:20px;
    `

    const Porcent = styled.div`
        display:flex;
     
        gap:10px;
        
        p{
            font-size: 14px;
            line-height: 20px;
            color: #181B32;
            margin-top:-2px;
        }
    `
    return (
        <ContainerSlice>
            <ContentSlice>
                <div className="line">

                </div>
            </ContentSlice>
            <Porcent>
                <ReactStars
                    count={5}
                    char={<i className='fas fa-star'></i>}
                    size={12}
                    value={stars}
                    activeColor="#8D8D9D"
                    color="#C3CBD6"
                />
                <p>{porcent}%</p>
            </Porcent>
        </ContainerSlice>
    )
}

