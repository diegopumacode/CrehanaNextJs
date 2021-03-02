import { Center } from "../UI/Center"

import styled from 'styled-components'
export default function SectionCourse({title,children}) {
    return (
        <Center>
            <Section>
            <Title>{title}</Title>
            {children}
            </Section>
        </Center>
    )
}
const Section = styled.section`
    padding:30px 0 20px 0;
`

const Title = styled.h4`
    font-weight: 900;
    font-size: 32px;
    line-height: 44px;
`