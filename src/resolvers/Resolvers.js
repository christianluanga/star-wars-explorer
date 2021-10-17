//@ts-ignore
import axios from 'axios';
import all_people_url, { paged_people_url, person_url } from '../helpers/URL.js';
export default {
    PersonDetails: {
        async films(char) {
            try {
                let films = await Promise.all(char.films.map(async (film) => {
                    try {
                        const { data } = await axios.get(film);
                        return data;
                    }
                    catch (error) {
                        console.error(error);
                    }
                })).then();
                return films;
            }
            catch (error) {
                const { response: { status, statusText }, } = error;
                return {
                    error: {
                        status: status,
                        message: statusText,
                    },
                };
            }
        },
        results(char) {
            return char;
        },
        birth_year(char) {
            return char.birth_year;
        },
    },
    Character: {
        async homeworld(char) {
            try {
                const { data } = await axios(char.homeworld);
                if (data.name)
                    return data.name;
            }
            catch (error) {
                const { response: { status, statusText }, } = error;
                return {
                    error: {
                        status: status,
                        message: statusText,
                    },
                };
            }
        },
    },
    Query: {
        async GetAllPeople(_, args, context) {
            const { page } = args;
            const url = page ? paged_people_url(page.toString()) : all_people_url();
            try {
                const people = await axios.get(url);
                return people.data;
            }
            catch (error) {
                const { response: { status, statusText }, } = error;
                return {
                    error: {
                        status: status,
                        message: statusText,
                    },
                };
            }
        },
        async GetPersonByName(_, args, context) {
            const { name } = args;
            try {
                const { data } = await axios.get(person_url(name));
                return data.results[0];
            }
            catch (error) {
                const { response: { status, statusText }, } = error;
                return {
                    error: {
                        status: status,
                        message: statusText,
                    },
                };
            }
        },
    },
};
