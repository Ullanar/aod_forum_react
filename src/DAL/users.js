import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users'

const usersDAL = {
    getUsers: axios.get(url)
}

export default usersDAL
