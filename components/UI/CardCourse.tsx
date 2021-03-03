import React from 'react'
import styled from 'styled-components';
import CartService from '../../services/CartService';
import { Button } from './Buttons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router'
export default function CardCourse({ course }) {

    const saveCart = () =>{
        const cartService= new CartService()
        const status = cartService.saveCourse(course)
        if (status) {
            toast("Se Agrego Curso al Carrito!",{autoClose: 2000})
            Router.push(`/`)
        }else{
            toast("El curso ya existe en el carrito!",{autoClose: 2000})
        }

    }

    const getCart = () =>{
        const cartService= new CartService()
        const status = cartService.saveCourse(course)
        Router.push(`/checkout`)
        
    }


    return (
        <Card>
            <div className="video">

            </div>
            <div className="footer">
                <div className="prices">
                    <p className="currency">co</p>
                    <p className="actual">${course.price}</p>
                    <p className="old">CO${course.realPrice}</p>
                </div>
                <Button full={true} mt={10} height={48} onClick={getCart}>Comprar Ahora</Button>
                <Button outline={true} full={true} height={48} onClick={saveCart}>Agregar a carrito</Button>
            </div>
            <ToastContainer />
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
        .prices{
            display: flex;
            align-items: center;
       
    
            .currency{
                font-style: normal;
                font-weight: 800;
                font-size: 24px;
                line-height: 32px;
                letter-spacing: 0.4px;
                color: #181B32;
            }
    
            .actual{
                font-weight: 800;
                font-size: 40px;
                line-height: 32px;
                letter-spacing: 0.4px
            }
    
            .old{
                margin-left:8px;
                font-size: 28px;
                line-height: 16px;
                letter-spacing: 0.1px;
                color: #8D8D9D;
                text-decoration: line-through;
            }
    
            .buy{
                margin-top:10px
            }
        }
    }
`