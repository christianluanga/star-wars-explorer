//@ts-ignore
import { gql } from 'apollo-server';
const typeDefs = gql `
type Character {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
    error: Error
}
type Error {
    status: Int 
    message: String
}
type Film{
    title: String
    release_date: String
    director: String
    opening_crawl: String
    episode_id: Int
    error: Error
}
type PersonDetails {
    birth_year: String
    films: [Film]
    results: Character
    error: Error
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
    GetPersonByName(name: String!): PersonDetails
}
`;
export default typeDefs;
