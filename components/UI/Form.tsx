import styled from 'styled-components';
export const FormStyled = styled.form`

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
