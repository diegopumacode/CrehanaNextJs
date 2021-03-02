import React from 'react'
import styled from 'styled-components';
export default function Teacher() {
    return (
        <CardTeacher>
            <div className="photo">

            </div>
            <div className="details">
                <p className="name">
                    Nombre de profesor
                </p>
                <p className="occupation">
                    Cargo de profesor
                </p>
            </div>
        </CardTeacher>
    )
}

const CardTeacher = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;

    .photo{
        width: 64px;
        height: 64px;
      
        background: #E8EAF0;
        border-radius: 10px;
    }

    .details{
        .name{
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
            color: #181B32;
        }

        .occupation{
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.1px;
            color: #181B32;
        }


    }
`