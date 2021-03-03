import React from 'react'
import styled from 'styled-components';
export default function LegalNotes() {
    return (
        <ContentLegal>
            <p className="title">Notas Legales</p>
            <p className="notes">
                Body 3- Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Id mi, mauris aliquam phasellus
                quis semper diam fringilla. Nunc nullam est in non.
                Enim sapien amet ut pharetra. Purus sagittis est felis
                sapien in. Auctor tellus, in mauris mi, facilisi arc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Id mi, mauris aliquam phasellus quis semper diam fringilla. 
                Nunc nullam est in non. Enim sapien amet ut pharetra. Purus 
                sagittis est felis sapien in. Auctor tellus, in mauris mi, 
                facilisi arcu sedut.

            </p>
        </ContentLegal>
    )
}


const ContentLegal = styled.div`
    margin-top:59px;
    @media only screen and (max-width: 1152px) {  
        margin-top:0px;
    }
    .title{
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.1px;
        color: #181B32;
    }
    .notes{
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #181B32;
    }
   
`