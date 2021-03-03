import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Button } from '../UI/Buttons';
import Pages from '../UI/Pages';
import OptionPayment from './OptionPayment';
import Terms from './Terms';
export default function Payment () {

    const [payment, setPayment] = useState("")
    const [targetData,setTargetData] = useState({
        correo:'',
        numero:'',
        fechaV:'',
        CVV:''        
    })

    useEffect(() => {
        console.log(payment)
    }, [payment])

    const saveCart = () =>{
        console.log(targetData)
    }

    return (
        <ContentPayment>
            <ContentPages>
                <Pages/>
            </ContentPages>
            <Title>Metodo de Pago</Title>
            <OptionPayment target={ true } 
                           title={"Pagar con Tarjeta"} 
                           value="target" 
                           payment={payment} 
                           setPayment={setPayment} 
                           targetData={targetData} 
                           setTargetData={setTargetData} key="prueb"/>
            <OptionPayment key="pruebsd" title={"Pago Efectivo"} payment={payment} value="pagoEfectivo" setPayment={setPayment}/>
            <OptionPayment key="pruebaswwd" title={"Paypal"} payment={payment} value="paypal" setPayment={setPayment}/>
            <Terms/>
            <Button mt={18} onClick={saveCart}>Comprar ahora</Button>
        </ContentPayment>
    )
}


const Title = styled.div`
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 44px;
    margin-top:40px;
    @media only screen and (max-width: 1152px) {  
        font-weight: 800;
        font-size: 24px;
        line-height: 28px;
        margin-top:10px;
    }
`

const ContentPages = styled.div`
    @media only screen and (max-width: 1152px) {  
        display:none;
    }
`

const ContentPayment = styled.div`
    padding: 46px 80px;
    @media only screen and (max-width: 1152px) {  
        padding: 20px 40px;
    }
`