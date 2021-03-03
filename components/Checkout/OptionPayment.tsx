import React from 'react'
import styled from 'styled-components';
export default function OptionPayment({title= "Titulo",target=false,value,payment,setPayment,targetData=null,setTargetData=null }) {


    const handleInputChange =(event)=>{
        setTargetData({
            ...targetData,
            [event.target.name] : event.target.value
        })
    }

    return (
        <ContentOptionPayment>
            <Header onClick={()=>setPayment(value)}>
                <input type="radio" checked={value == payment} value={value || ''} onChange={()=>setPayment(value)} name={value} id="radio"/>
                <label className="title">{title}</label>
            </Header>
            {
                target && value === payment ?
                <Form>
                    <div className="form-control">
                        <label htmlFor="correo">Correo electrónico</label>
                        <input type="text" onChange={handleInputChange} value={targetData.correo} name="correo"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Número de tarjeta</label>
                        <input type="text" onChange={handleInputChange} value={targetData.numero} name="numero"/>
                    </div>
                    <div className="double-control">
                        <div className="form-control">
                            <label htmlFor="">Fecha de vencimiento</label>
                            <input type="text" onChange={handleInputChange} value={targetData.fechaV} name="fechaV"/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Código de seguridad</label>
                            <input type="text" onChange={handleInputChange} value={targetData.CVV} name="CVV"/>
                        </div>
                    </div>
                </Form>
                : ""
            }
            
        </ContentOptionPayment>
    )
}


const Form = styled.form`

    display:flex;
    flex-direction:column;
    margin-top:20px;
    gap:20px;
    .double-control{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:24px;
    }
    .form-control{
        display:flex;
        flex-direction:column;
        gap:5px;
        label{

            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 18px;



        }
        input{
            padding:0 10px;
            outline:none;
            height: 56px;
            width: 100%;
            border-radius: 10px;
            background: #FFFFFF;
            mix-blend-mode: normal;
            
            
            border: 0.5px solid #878FB8;
            box-sizing: border-box;
            border-radius: 10px;
        }
    }
`

const ContentOptionPayment = styled.div`
    padding:26px;
    background: #F6F7F9;
    border-radius: 10px;
    margin:20px 0;
    width:464px;
    
    @media only screen and (max-width: 1152px) {  
        width:100%;
        padding:20px;
    }
    
`


const Header = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
    .title{
        font-weight: 800;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.4px;
        color: #181B32;
        @media only screen and (max-width: 1152px) {  
            font-size:16px;
        }
    }

    
`

