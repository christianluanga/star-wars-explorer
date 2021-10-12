//@ts-ignore
import { gql } from 'apollo-server'

export default gql`
    type Query {
        GetAllPeople ($page: String){
        GetAllPeople(page: $page){
            count
            next
            previous
            results{
                name
                gender
                homeWord
                height 
                mass
            }
        }
    }
    }
`