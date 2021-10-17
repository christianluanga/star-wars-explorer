const BASE_URL = 'https://swapi.dev/api/people/';
const all_people = () => {
    return BASE_URL;
};
const paged_people_url = (page) => {
    return `${BASE_URL}?page=${page}`;
};
const person_url = (name) => {
    return `${BASE_URL}?search=${name}`;
};
export default all_people;
export { paged_people_url, person_url };
