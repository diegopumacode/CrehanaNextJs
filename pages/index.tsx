import { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import Categories from '../components/Home/Categories'
import Filter from '../components/Home/Filter'
import ListCourses from '../components/Home/ListCourses'
import Pagination from '../components/Home/Pagination'
import SectionHome from '../components/Home/Section'
import { Layout } from '../components/Layout/Layout'
import Banner from '../components/UI/Banner'
import CourseService from '../services/CourseService'
import FilterService from '../services/FilterService'
import Head from 'next/head'
import { Center } from '../components/UI/Center'

const IndexPage = ({ data }) => {

  const [page, setPage] = useState({})
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(0);
  const [subCategory, setsubCategory] = useState(0);
  const [prices, setPrices] = useState(0);
  const [level, setLevel] = useState(0)
  const [actualPage, setActualPage] = useState(1)

  useEffect(() => {
    getData()
  }, [actualPage])

  const getData = async () => {
    const courseService = new CourseService()
    const data = await courseService.getCourses(category, subCategory, level, actualPage, false)
    const cour = [...data.objects];
    switch (+prices) {
      case 1:
        setCourses(cour.sort((a,b)=> a.price - b.price ))
      break;
  
      case 2:
        setCourses(cour.sort((a,b)=> b.price - a.price ))
      break;
      default:
        setCourses(data.objects)
        break;
    }
    
    setPage(data)
  }

  return (
    <Layout>
      <Head>
        <title>Crehana</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Crehana" />
        <meta property="og:title" content="Crehana" />
        <meta name="description" content="Description de curso" />
        <meta name="keywords" content="keywords" />
        <meta property="og:url" content="https://www.crehana.com/pe/" />
        <meta property="og:description" content="Crehana" />
        <meta property="og:image" content="https://crehana-public-catalog.imgix.net/images/courses/promo-images/3c74721e/084235f3.jpeg?auto=compress&fm=webp&fit=crop&dpr=1" />
      </Head>
      <Banner />

      <SectionHome title={"Title H4 - Categories"}>
        <Categories />
      </SectionHome>

      <SectionHome title={"Title H4 - Listado de cursos"}>
        <Filter setCategory={setCategory}
          setsubCategory={setsubCategory}
          setLevel={setLevel}
          setPrices={setPrices}
          categories={data.categories}
          levels={data.levels}
          filterCourses={(e) => { e.preventDefault(); getData() }} />
      </SectionHome>

      <ListCourses courses={courses} />
      <Center>
        <Pagination
          total={page["pages"]}
          actualPage={actualPage}
          onSelectPage={(pageNum) => setActualPage(pageNum)}
        />
      </Center>
    </Layout>
  )
}

export default IndexPage



export async function getServerSideProps(context) {
  const filterService = new FilterService()
  const result = await filterService.getFilterItems()
  return { props: { data: result } };
}
