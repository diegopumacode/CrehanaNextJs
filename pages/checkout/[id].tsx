import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import React from 'react'
import ErrorPage from 'next/error'
import { Layout } from '../../components/Layout/Layout'
import Hero from '../../components/Course/Hero'
import Temary from '../../components/Course/Temary'
import About from '../../components/Course/About'
import Projects from '../../components/Course/Projects'
import Score from '../../components/Course/Score'
import Questions from '../../components/Course/Questions'

const Checkout = ({ data }) => {
    
    return (
        <>
            {
                data.error
                    ? <ErrorPage statusCode={404} />
                    : <>
                        <Layout>
                            {data.name}
                        </Layout>
                    </>
            }
        </>

    )
}


export async function getServerSideProps(context) {

    const { id } = context.params
    const client = new ApolloClient({
        uri: 'http://localhost:8000/graphql/',
        cache: new InMemoryCache()
    })

    try {
        const { data } = await client.query({
            query: gql`
                query{
                    course(id: "${id}"){
                        id
                        name
                        level {
                            id
                            name
                        }
                        users
                        
                        realPrice
                        price
                        courseScore
                        category{
                            id
                            name
                        }
                        subCategory{
                            id
                            name
                        }
                        
                    }
                }
            `
        })

        return { props: { data: data.course } };
    } catch (error) {
        return { props: { data: { error: 404 } } };
    }

}

export default Checkout