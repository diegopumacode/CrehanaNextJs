import React from 'react'
import styled from 'styled-components';
import { Button } from '../UI/Buttons';
export default function Filter({setCategory,setsubCategory,setLevel,setPrices,categories,levels,filterCourses}) {
    return (
        <>
        <FilterMobile>
            <Button outline={true} full={true}> <i className="fas fa-sliders-h"></i> Filtrar por</Button>
        </FilterMobile>
        <FilterForm>
            <ControlForm>
                <label>Categoria</label>
                <FilterFormSelect onChange={e => setCategory(e.target.value)}>
                    <option  value={0}>Todos</option>
                    {categories.map(category=><option key={category.id} value={category.id}>{category.name}</option>)}
                </FilterFormSelect>  
            </ControlForm>
            <ControlForm>
                <label>SubCategoria</label>
                <FilterFormSelect onChange={e => setsubCategory(e.target.value)}>
                    <option  value={0}>Todos</option>
                    {categories.map(category=><option key={category.id} value={category.id}>{category.name}</option>)}
                </FilterFormSelect>  
            </ControlForm>
            <ControlForm>
                <label>Nivel</label>
                <FilterFormSelect onChange={e => setLevel(e.target.value)}>
                    <option  value={0}>Todos</option>
                    {levels.map(level=><option key={level.id} value={level.id}>{level.name}</option>)}
                </FilterFormSelect>  
            </ControlForm>
            <ControlForm>
                <label>Precio</label>
                <FilterFormSelect onChange={ e => setPrices(e.target.value) }>
                    <option  value={0}>Todos</option>
                    <option value={1}>Precios mas bajos</option>
                    <option value={2}>Precios mas altos</option>
                </FilterFormSelect>  
            </ControlForm>

            <ControlForm>
                <Button height={48} width={200}  onClick={(e)=> {filterCourses(e)}}>Aplicar Filtros</Button>
            </ControlForm>
        </FilterForm>

        </>
    )
}


const FilterForm = styled.form`
    display: flex;
    padding: 30px 0;
    justify-content: space-between;
    @media only screen and (max-width: 1152px) {  
        display:none;
    }
`

const ControlForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    
    gap: 5px;


    label{
        font-weight: bold;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 20px;
    }
`
const FilterFormSelect = styled.select`
    min-width: 212px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #8D8D9D;
    box-sizing: border-box;
    border-radius: 10px;
    outline: none;
    padding: 0 10px;
    cursor: pointer;
  
`

const FilterMobile = styled.div`
    display:none;
    @media only screen and (max-width: 1152px) {  
        display:block;
    }
`