import React from 'react'
import styled from 'styled-components';
export default function DetailsCourse({nivel,users,score}) {
    return (
        <Details>
            <p className="items"><i className="fas fa-signal"></i>{nivel}</p>
            <p className="items"><i className="fas fa-user-friends"></i>{users}</p>
            <p className="items"><i className="fas fa-star"></i>{score}</p>
        </Details>
    )
}


const Details = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom:15px;
    .items{
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.1px;
        color: #8D8D9D;
        display:flex;
        align-items:center;
        gap:4px;
    }
`