import React from 'react'
import styled from 'styled-components';

export default function Terms() {
    return (
        <TermsAndCondition>
            <input type="checkbox" name="" id=""/>
            <label className="terms" >Acepto expresamente todos los Términos y Condiciones.</label>
        </TermsAndCondition>
    )
}

const TermsAndCondition = styled.div`
    display:flex;
    gap:10px;
    align-items:center;

    .terms{
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.1px;
        color: #8D8D9D;
    }
`