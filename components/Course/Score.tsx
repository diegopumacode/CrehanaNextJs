import React from 'react'
import styled from 'styled-components'
import { Center } from '../UI/Center'
import Slice from '../UI/Slice'
import SectionCourse from './Section'
import ReactStars from "react-rating-stars-component";
import Comments from './Comments'

export default function Score() {
    return (
        <>
            <SectionCourse title={"Valoraciones"}>
                <ContentScore>
                    <Media>
                        <MediaValue>
                            4.8
                        </MediaValue>
                        <Stars>
                            <ReactStars
                                count={5}
                                char={<i className='fas fa-star'></i>}
                                size={12}
                                value={4}
                                activeColor="#8D8D9D"
                                color="#C3CBD6"
                            />
                            <p>Media total</p>
                        </Stars>
                    </Media>
                    <Graphics>
                        <Slice porcent={83} stars={5}/>
                        <Slice porcent={17} stars={4}/>
                        <Slice porcent={0} stars={3}/>
                        <Slice porcent={0} stars={2}/>
                        <Slice porcent={0} stars={1}/>
                    </Graphics>
                </ContentScore>
                
            </SectionCourse>
            <Center>
                <Comments/>
            </Center>
        </>
        
    )
}


const Media = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    @media only screen and (max-width: 1152px) {  
        gap:5px;
    }

`

const MediaValue = styled.div`
    
    font-size: 52px;
    font-style: normal;
    font-weight: 800;
    line-height: 60px;
    letter-spacing: 0px;
    

`

const Stars = styled.div`
    display:flex;
    flex-direction:column;

`
const ContentScore = styled.div`
    margin-top:20px;
    display:flex;
    gap:40px;
    @media only screen and (max-width: 1152px) {  
        flex-direction:column;
        gap:10px;
    }
`

const Graphics = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    @media only screen and (max-width: 1152px) {  
        gap:0;
    }
`