import { ApolloClient, InMemoryCache, gql} from "@apollo/client";

export default class FilterService{
    
    constructor() {}

    async getFilterItems() {
        const client = new ApolloClient({
            uri: 'https://infinite-lake-06428.herokuapp.com/graphql/',
            cache: new InMemoryCache()
        })

        try {
            const { data } = await client.query({
                query: gql`
                query{
                    filterItems{
                      categories {
                        id
                        name
                      }
                      levels{
                        id
                        name
                      }
                    }
                  }
                  
                `
            })
    
            return  data.filterItems;
        } catch (error) {
            return { props: { data: { error: 404 } } };
        }
    }
}