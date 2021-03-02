import React from 'react'
import styled from 'styled-components';

export default function Actions() {
    return (
        <ContentActions className="courseHero__actions">
            <div className="actions">
                <i className="fas fa-heart"></i>
                <p>Accion 1</p>
            </div>
            <div className="actions">
                <i className="fas fa-moon"></i>
                <p>Accion 1</p>
            </div>
            <div className="actions">
                <i className="fab fa-accusoft"></i>
                <p>Accion 1</p>
            </div>
        </ContentActions>
    )
}


const ContentActions = styled.div`
    display: flex;
    gap: 52px;
    margin-top: 10px;

    .actions{
        width: 80px;
        height: 54px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        justify-content: center;
        color: #8D8D9D;
        font-weight: bold;
        font-size: 16px;

        @media only screen and (max-width: 969px) {  
            font-size: 14px;
        }
    }

`