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


const IndexPage = ({data}) => {
  const [page, setPage] = useState({})
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(0);
  const [subCategory, setsubCategory] = useState(0);
  const [level, setLevel] = useState(0)
  const [actualPage, setActualPage] = useState(1)

  useEffect(() => {
    getData()   
  }, [actualPage])
  const getData = async () => {
    const courseService = new CourseService()
    const data = await courseService.getCourses(category,subCategory,level,actualPage,false)
    setCourses(data.objects)
    setPage(data)
  }

  return (
      <Layout>
          <Banner/>

          <SectionHome title={"Title H4 - Categories"}>
                <Categories/>
          </SectionHome>

          <SectionHome title={"Title H4 - Listado de cursos"}>
                <Filter setCategory={setCategory}
                        setsubCategory={setsubCategory}
                        setLevel={setLevel}
                        categories={data.categories}
                        levels={data.levels}
                        filterCourses={(e)=>{e.preventDefault();getData()}}/>
          </SectionHome>

          <ListCourses courses={courses}/>

          <Pagination
                    total={page["pages"]}
                    actualPage={actualPage}
                    onSelectPage={(pageNum) => setActualPage(pageNum)}
                  />
      </Layout>    
  )
}

export default IndexPage

export async function getServerSideProps(context) {
  const filterService = new FilterService()
  const result = await filterService.getFilterItems()
  return { props: { data: result } };
}
