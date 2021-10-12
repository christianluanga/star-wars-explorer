//@ts-ignore
import { gql } from 'apollo-server'

const typeDefs = gql`
type Character {
    name: String
    height: String
    mass: String
    gender: String
    homeword: String
}
type Error {
    status: Int 
    message: String
}
type PeopleResult {
    count: Int 
    next: String
    previous: String
    error: Error
    results: [Character]
}

type Query{
    GetAllPeople(page: Int): PeopleResult
    GetPersonByName(name: String!): Character
}
`

export default typeDefs