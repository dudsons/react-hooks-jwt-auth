import axios from 'axios'

const URL_API = 'http://localhost:8082/api/auth/';

const register = (username: string, password: string, email: string) => {
    return axios.post(URL_API + "signup", {
        username, email, password
    })
};

const login = (username: string, password: string) => {
    return axios.post(URL_API + 'signup', {
        username, password
    }).then((response)=>{
        if(response.data.token){ // w przykładzie nasz accessToken ale u Ciebie tak ta wartość powinna się nazywać
            localStorage.setItem("user",response.data);
        }
        return response.data;
    })
};

const logout = () =>{
    localStorage.removeItem("user")
};

const getCurrentUser =() =>{
    return JSON.parse(localStorage.getItem("user")!);
};

export default {
    logout,
    login,
    register,
    getCurrentUser
}
