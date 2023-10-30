import axios from "axios"

const url = 'http://localhost:5000'


export const getMessages = async () => {

    try {
        const messages = await axios.get( `${url}/chats` )
        return messages.data;        
    } catch (error) {
        return error;
    }
}

export const addMessage = async (email , message ) => {

    try {
        const response = await axios.post(`${url}/user/${email}` , { message : message })
        return response;
    } catch (error) {
        return error;
    }

}

export const deleteMessage = async ( email , messageid ) => {
    
    try {
        const response = await axios.delete(`${url}/user/${email}/${messageid}`)
        return response;
    } catch (error) {
        return error;
    }
}