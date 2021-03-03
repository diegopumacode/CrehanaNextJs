import React, { useEffect, useState } from 'react'
import CartService from '../../services/CartService'
import styled from 'styled-components';
export default function ListProducts() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        let cartService = new CartService()
        setCourses(cartService.getCourses())
    }, [])

    return (
        <ListContent>
            {
                courses.map(course=> <CardDetails key={course.id}>
                    <div className="image">
    
                    </div>
                    <div className="body">
                        <p className="title">{course.name}</p>
                        <p className="teacher">Profesor del curso</p>
                        <div className="info">
                            <p className="items"><i className="fas fa-signal"></i>nivel</p>
                            <p className="items"><i className="fas fa-user-friends"></i>usuarios</p>
                            <p className="items"><i className="fas fa-star"></i>score</p>
                        </div>
                    </div>
                </CardDetails>)
            
            }

            
        </ListContent>
    )
}

const ListContent = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
`

const CardDetails = styled.div`
    display:grid;  
    grid-template-columns:150px auto;
    gap:24px;  
    .image{
        width: 159px;
        height: 116px;
        background: #8D8D9D;
        border-radius: 10px;
        @media only screen and (max-width: 400px) {  
            width: 150px;
            height: 70px;
        }
    }

    .body{
        display:flex;
        flex-direction:column;
        justify-content:center;
        gap:8px;
        .title{
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
            color: #181B32;
        }

        .teacher{
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            color: #181B32;
        }
        .details{
            display:flex;
        }
        .info{
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
        }
    }
`
