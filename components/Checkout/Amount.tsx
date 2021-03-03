import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import CartService from '../../services/CartService';
export default function Amount() {
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        let cartService = new CartService()
        setSubTotal(cartService.getSubtotal())
    }, [])


    return (
        <ContentAmount>
        <Total>
            <p className="title">Subtotal</p>
            <p className="amount">CO$ {subTotal}</p>
        </Total>
        <Total>
            <p className="title">Tarjeta</p>
            <p className="amount">0% Dto.</p>
        </Total>
        <Total>
            <p className="title">Total a pagar</p>
            <p className="amount">CO$ {subTotal}</p>
        </Total>
    </ContentAmount>
    )
}

const Total = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const ContentAmount = styled.div`
    margin:30px 0;
    display:flex;
    flex-direction:column;
    gap:10px;
`