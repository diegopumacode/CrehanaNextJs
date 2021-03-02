import React from 'react'
import styled from 'styled-components'
import ReactStars from "react-rating-stars-component";

export default function Comments() {
    return (
        <ContentCommnet>
            <User>
                <div className="avatar">

                </div>
                <div className="info">
                    <p>Usuario123</p>
                    <ReactStars
                                count={5}
                                char={<i className='fas fa-star'></i>}
                                size={12}
                                value={5}
                                activeColor="#8D8D9D"
                                color="#C3CBD6"
                    />
                </div>
            </User>
            <Comment>
                    Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris
                    aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien
                    amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi,
                    facilisi arcu sed ut.
            </Comment>
        </ContentCommnet>
    )
}


const Comment = styled.p`
    margin-top:20px;
    max-width: 600px;
    left: 56px;
    top: 2px;

    
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    

    `

const User = styled.div`
    display:flex;
    gap:10px;
    .avatar{
        width: 40px;
        height: 40px;
        background: #E8EAF0;
        border-radius: 10px;
    }
    .info{
        display:flex;
        flex-direction:column;
        gap:2px;

        p{
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
            color: #181B32;
        }
    }
`

const ContentCommnet = styled.div`

    margin:10px 0;

`