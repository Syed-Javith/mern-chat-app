import axios from "axios"
import Cookies from "universal-cookie";
const url = 'http://localhost:5000'

export const loginUser = async (email , password) => {
    // console.log("logging in");

    try{
        const response =  await axios.post(`${url}/auth/login`, { email : email , password : password } )
        // console.log(response)
        return response;
    }catch(err){
        return err;
    }
   

}

export const registerUser = async (name , email , password) => {

    try {
        const response = await axios.post(`${url}/auth/register`,  { name : name , email : email , password : password } )
        return response;
    } catch (error) {
        return error;
    }

}

export const logoutUser = () => {
    // console.log("logout");

    const cookies = new Cookies();
    cookies.remove('user',{ path : '/' })

}