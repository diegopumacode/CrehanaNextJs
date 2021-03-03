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
import Head from 'next/head'

const Course = ({ data }) => {
    
    return (
        <>
            {
                data.error
                    ? <ErrorPage statusCode={404} />
                    : <>
                        <Layout>
                            <Head>
                                <title>{data.name}</title>
                                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                                <meta property="og:type" content="website"/>
                                <meta name="description" content="Description de curso"/>
                                <meta property="og:title" content={Course.name}/>
                                <meta name="description" content="Description de curso"/>
                                <meta name="keywords" content="keywords"/>
                                <meta property="og:url" content="https://www.crehana.com/pe/"/>
                                <meta property="og:description" content="Descripcion de curso"/>
                                <meta property="og:image" content="https://crehana-public-catalog.imgix.net/images/courses/promo-images/3c74721e/084235f3.jpeg?auto=compress&fm=webp&fit=crop&dpr=1"/>
                            </Head>
                            <Hero course={data}/>
                            <Temary/>
                            <About/>
                            <Projects/>
                            <Score/>
                            <Questions/>
                        </Layout>
                    </>
            }
        </>

    )
}


export async function getServerSideProps(context) {

    const { id } = context.params
    const client = new ApolloClient({
        uri: 'https://infinite-lake-06428.herokuapp.com/graphql/',
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

export default Course