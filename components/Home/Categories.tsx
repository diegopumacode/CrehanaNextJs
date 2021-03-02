import React from 'react'
import styled from 'styled-components';

export default function Categories() {
    return (
        <CategoriesSlider>
            <CategoriesList>
                <Category>
                    <i className="fas fa-bullhorn"></i>
                    <p>Category</p>
                </Category>
                <Category>
                    <i className="fas fa-bullhorn"></i>
                    <p>Category</p>
                </Category>
                <Category>
                    <i className="fas fa-bullhorn"></i>
                    <p>Category</p>
                </Category>
                <Category>
                    <i className="fas fa-bullhorn"></i>
                    <p>Category</p>
                </Category>
                <Category>
                    <i className="fas fa-bullhorn"></i>
                    <p>Category</p>
                </Category>
                <Category>
                    <i className="fas fa-bullhorn"></i>
                    <p>Category</p>
                </Category>
                <Category>
                    <i className="fas fa-bullhorn"></i>
                    <p>Category</p>
                </Category>
                <Category>
                    <i className="fas fa-bullhorn"></i>
                    <p>Category</p>
                </Category>

            </CategoriesList>
        </CategoriesSlider>
    )
}
const CategoriesSlider = styled.div`
    height: 150px;

    box-sizing: border-box;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1152px) { 
        box-sizing: border-box;
        overflow-x: scroll;
    }
`

const CategoriesList = styled.ul`
    list-style:none;
    display:flex;
    gap:24px;
`

const Category = styled.li`
    width: 120px;
    height: 112px;
    left: 0px;
    top: 0px;
    background-color: var(--bg-gray-lighter);
    border-radius: 10px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:bold;
    flex-direction:column;
    gap:10px;
`
