import React from 'react'
import styled from 'styled-components';
import { Center } from '../UI/Center';
export default function Pagination({ total, actualPage, onSelectPage}) {

    const listItems = [];
    for (let i = 1; i <= total; i++) {
        listItems.push(
          <option value={i} key={i} >
            {i}
          </option>
        );
    }

    return (
        <Center>
            <ContentPagination>
                <ButtonPagination disabled={actualPage==1} onClick={() => onSelectPage(+actualPage-1)}><i className="fas fa-arrow-left"></i></ButtonPagination>
                <p>Pagina:</p>
                <SelectPagination value={actualPage} onChange={(e) => onSelectPage(+e.target.value)}>
                    {listItems}
                </SelectPagination>
                <p> de {total}</p>

                <ButtonPagination disabled={actualPage==total} onClick={() => onSelectPage(+actualPage+1)}><i className="fas fa-arrow-right"></i></ButtonPagination>
            </ContentPagination>
        </Center>
    )
}

const ContentPagination = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #8D8D9D;
    @media only screen and (max-width: 1152px) {  
        justify-content: center;
    }

`
const ButtonPagination = styled.button`
    width: 50px;
    height: 50px;
    border: 2px solid #E8EAF0;
    border-radius: 10px;
    outline: none;
    cursor: pointer
`

const SelectPagination = styled.select`
    background: white;
    border: 1px solid #E8EAF0;
    box-sizing: border-box;
    border-radius: 10px;
    width: 50px;
    height: 50px;
`