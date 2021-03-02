import React from 'react'
import { Center } from '../UI/Center'
import styled from 'styled-components';
import DetailsCourse from '../UI/DetailsCourse';
import Teacher from '../UI/Teacher';
import Actions from '../UI/Actions';
import CardCourse from '../UI/CardCourse';

export default function Hero({course}) {
    return (
        <Center>
            <ContentHero>
                <DetailsHero>
                    <NameHero>
                        {course.name}
                    </NameHero>

                    <DescriptionHero>
                        Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc 
                        nullam est in non. Enim sapien amet ut pharetra. Purus sagittis
                        est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu 
                        sedut.
                    </DescriptionHero>
                    <DetailsCourse nivel={course.level.name} users={course.users} score={course.courseScore}/>
                    <Teacher/>
                    <Actions/>
                </DetailsHero>

                <VideoHero>
                    <CardCourse course={course}/>
                </VideoHero>
            </ContentHero>
        </Center>
    )
}


const ContentHero = styled.div`
    display: flex;
    gap: 26px;
    margin-top: 20px;
    max-height: 450px;
    width: 100%;
    @media only screen and (max-width: 969px) {  
        flex-direction:column-reverse;
        max-height: 1000px;
    }
`
const NameHero = styled.h2`
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 44px;
    letter-spacing: 0px;
    text-align: left;
    @media only screen and (max-width: 969px) {  
        width: 100%;
    }
`

const DetailsHero = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media only screen and (max-width: 969px) {  
        width: 100%;
    }
`
const DescriptionHero = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #181B32;
    max-width: 560px;
`
const VideoHero = styled.div`

`

