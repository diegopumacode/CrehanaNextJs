import { ApolloClient, InMemoryCache, gql} from "@apollo/client";

export default class SessionService{
    
    constructor() {}

    async login(username,password) {
        console.log(username,password)
        const client = new ApolloClient({
            uri: 'https://infinite-lake-06428.herokuapp.com/graphql/',
            cache: new InMemoryCache()
        })

        try {
            const { data } = await client.mutate({
                mutation: gql`
                mutation{
                    tokenAuth(username:"${username}",password:"${password}"){
                        success
                        errors
                        refreshToken
                        token
                    }
                  }
                  
                `
            })
    
            return data.tokenAuth;
        } catch (error) {
            return {error:"error"};
        }
    }
}