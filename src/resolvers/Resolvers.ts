//@ts-ignore
import axios from 'axios'
import all_people_url, { paged_people_url, person_url } from '../helpers/URL.js'

export default  {
    Character:{
        async homeword(char: any){
            try {
                const {data } = await axios(char.homeworld)
                if(data.name) return data.name
            } catch (error) {
                
            }
        }
    },
    Query:{
        async GetAllPeople(_: any, args : {page: number}, context: any){
            const {page} = args
            const url =  page ? paged_people_url((page).toString()) : all_people_url()
            try {
                const people = await axios.get(url)
                return people.data
            } catch (error) {
                const {response: {status, statusText}}: any = error
                return {
                    error:{
                        status: status,
                        message: statusText
                    }
                }
            }
        },
        async GetPersonByName(_: any, args: {name: string}, context: any){
            const { name } = args
            const { data } = await axios.get(person_url(name))
            debugger
            return data.results[0]
        }
    }
}
