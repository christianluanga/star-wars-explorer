//@ts-ignore
import { ApolloServer} from 'apollo-server'
import typeDefs from './types/TypeDefs.js'
import resolvers from './resolvers/Resolvers.js'

const server = new ApolloServer({
    typeDefs,
    resolvers
})
const PORT = process.env.PORT || 4000
server.listen(PORT).then(() => console.log(`listening on port ${PORT}`))