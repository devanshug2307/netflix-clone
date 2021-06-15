import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
//it means that it will apend to the baseurl
// instance.get("/foobar")
export default instance;
