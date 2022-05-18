const {ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
    type User{
        name: String
        age: Int
        position: String
    }
    type Query{
        users: [User]
    }
    type Mutation{
        createUser(name: String, age: Int, position: String):User
    }
`

const resolvers = {
    Query: {
        users: ()=>{
            return userInfo
        }
    },
    Mutation:{
        createUser(parent, args){
            const newUser = args
            userInfo.push(newUser)
            return newUser
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url})=>{
    console.log(`server run at port ${url}`);
})

let userInfo = [
    {
        name: 'book',
        age: 21,
        position: 'cb' 
    },
    {
        name: 'wenphong',
        age: 12,
        position: 'st' 
    },
    {
        name: 'mild',
        age: 47,
        position: 'rw' 
    },
    {
        name: 'jay',
        age: 25,
        position: 'cdm' 
    },
    {
        name: 'preaw',
        age: 41,
        position: 'gk' 
    },
    {
        name: 'noey',
        age: 20,
        position: 'cam' 
    },
]