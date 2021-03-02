import React from 'react'
import styled from 'styled-components';
import { Button } from './Buttons';

export default function CardCourse({course}) {
    return (
        <Card>
            <div className="video">

            </div>
            <div className="footer">
                <p className="price">${course.price}</p>
                <Button full={true} mt={10} height={48}>Comprar Ahora</Button>
                <Button outline={true} full={true} height={48}>Agregar a carrito</Button>
            </div>
              
        </Card>
    )
}

const Card = styled.div`
    width: 465px;
    background: #E8EAF0;
    border-radius: 0px 0px 10px 10px;

    @media only screen and (max-width: 969px) {  
        width: 100%;
    }
    .video{
        height: 274px;
        background: #000000;
    }

    .footer{
        height: 218px;
        padding: 30px 24px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        @media only screen and (max-width: 969px) {  
           display:none;
        }
        .price{
            font-style: normal;
            font-weight: 900;
            font-size: 40px;
            line-height: 44px
        }
    }
`