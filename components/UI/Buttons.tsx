import styled from 'styled-components'
export const Button = styled.button`
    width:${ props => props.full ? "100%" : "" };
    width:${ props => props.width ? `${props.width}px` : "" };
    height:${ props => props.height ? `${props.height}px`  : "40px" };
    padding:0 40px;
    border-radius:10px;
    border:3px solid #181B32;
    font-weight: 800;
    font-size: 16px;
    line-height: 16px;
    background-color:${ props => props.outline ? "white" :"#181B32" };
    color:${ props => props.outline ? "#181B32" : "white" };
    outline:none ;
    cursor:pointer;
    transition:500ms;
    margin-top:${ props => props.mt ? `${props.mt}px`  : 0 };
    display:${ props => props.display || "block" };
    &:hover {
        transform:translate(0px,-2px);
        opacity:0.5;
    }

    
`

