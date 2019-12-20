import axios from "axios";


// uses Axios create and adds an authorization header which takes in token
export const axiosWithAuth =() => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: '',
        headers: {
            Authorization: token
        }
    })

}