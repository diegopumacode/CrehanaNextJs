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

    async register(username,email,password1,password2) {
        
        const client = new ApolloClient({
            uri: 'https://infinite-lake-06428.herokuapp.com/graphql/',
            cache: new InMemoryCache()
        })

        try {
            const { data } = await client.mutate({
                mutation: gql`
                mutation{
                    register(username:"${username}",password1:"${password1}",password2:"${password2}",email:"${email}"){ 
                         success
                      errors
                      refreshToken
                      token
                    }
                }
                `
            })
        console.log(data)
            return data.register;
        } catch (error) {
            return {error:"error"};
        }
    }
}