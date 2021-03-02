import { ApolloClient, InMemoryCache, gql} from "@apollo/client";

export default class CourseService{
    
    constructor() {}

    async getCourses(category, subCategory, level, actualPage,items) {
        const client = new ApolloClient({
            uri: 'https://infinite-lake-06428.herokuapp.com/graphql/',
            cache: new InMemoryCache()
        })

        try {
            const { data } = await client.query({
                query: gql`
                query{
                    courses(category:"${category}",subCategory:"${subCategory}",page:${actualPage},level:"${level}",numItems: ${!items ? 12 : 4}){
                      page
                      pages
                      hasNext
                      hasPrev
                      objects{
                        id
                        name
                        level {
                          id
                          name
                        }
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
                        users
                      }
                    }
                  }
                  
                `
            })
    
            return  data.courses;
        } catch (error) {
            return  { data: { error: 404 } } };
        }
    
}