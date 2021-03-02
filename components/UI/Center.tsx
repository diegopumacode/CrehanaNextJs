import styled from 'styled-components'
export const Center = styled.div`
    max-width: 1152px;
    margin: 0 auto;
    @media only screen and (max-width: 1152px) {  
        padding-left:${ props => !props.responsiveFull ? "30px" : "" };
        padding-right:${ props => !props.responsiveFull ? "30px" : "" };
    }
`

