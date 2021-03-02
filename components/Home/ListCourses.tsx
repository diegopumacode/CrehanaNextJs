import React from 'react'
import styled from 'styled-components';
import { Center } from '../UI/Center';
import Course from './Course';

export default function ListCourses({courses}) {
    return (
        <Center>
            <Courses>
                {
                    courses.map(course=>(<Course key={course.id} course={ course }/>))
                }
                
            </Courses>
        </Center>
    )
}

const Courses = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill,270px);
    gap:24px;
    flex-wrap: wrap;
    justify-content: center;
`