import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Button } from '../UI/Buttons';
import Link from 'next/link'
import Router from 'next/router'
export default function Course({course}) {
    
    const [token, setToken] = useState(false)
    
    useEffect(() => {
        setToken(sessionStorage.getItem('token') ? true : false)
    }, [])

    const changeRoute = () => {
        console.log("cambiar rutaa")
        if (token) {
            Router.push(`/checkout`)
        }else{
            Router.push('/register')
        }
    }

    return (
        <Card>
            <Link href={`/course/${course.id}`}>
                <CardImage>
                    <span className="tag">Tag Venta</span>
                </CardImage>
            </Link>
            <CardBody>
                <Link href={`/course/${course.id}`}>
                    <h4 className="name">{course.name}</h4>
                </Link>
                <p className="teacher">Profesor del curso</p>
                <div className="info">
                    <p className="items"><i className="fas fa-signal"></i>{course.level.name}</p>
                    <p className="items"><i className="fas fa-user-friends"></i>{course.users}</p>
                    <p className="items"><i className="fas fa-star"></i>{course.courseScore}</p>
                </div>
                <div className="prices">
                    <p className="currency">co</p>
                    <p className="actual">${course.price}</p>
                    <p className="old">${course.realPrice}</p>
                </div>
                <Button full={true} mt={12} onClick={changeRoute}>
                    Comprar Ahora
                </Button>
            </CardBody>
        </Card>
    )
}

const Card = styled.div`
  width: 270px;
  background: #F6F7F9;
  border-radius: 10px 10px 0px 0px;
`


const CardImage = styled.div`
    height: 160px;
    background: #E8EAF0;
    border-radius: 10px 10px 0px 0px;
    position: relative;
    cursor:pointer;
    .tag{
        position: absolute;
        top: 8px;
        left: 8px;
        padding: 4px 8px;
        background: #8D8D9D;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        font-size: 12px;
        text-transform: uppercase;
    }
    img{
        border-radius:10px 10px 0 0;
    }
`


const CardBody = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    .name {
        font-weight: bold;
        font-size: 16px;
        color: #181B32;
        height:40px;
    }

    .teacher{
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #181B32;
        margin:8px 0;
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

    .prices{
        display: flex;
        align-items: center;
   

        .currency{
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 32px;
            letter-spacing: 0.4px;
            color: #181B32;
        }

        .actual{
            font-weight: 800;
            font-size: 24px;
            line-height: 32px;
            letter-spacing: 0.4px
        }

        .old{
            margin-left:8px;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.1px;
            color: #8D8D9D;
            text-decoration: line-through;
        }

        .buy{
            margin-top:10px
        }
    }
`

