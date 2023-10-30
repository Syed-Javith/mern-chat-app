import React, { useState } from 'react'
import { addMessage } from '../apis/Messages';
import {BiSend} from 'react-icons/bi'


const MessageSendBox = ({sender}) => {

    const [newMessage , setNewMessage] = useState('');

    const add = async () =>{

        try {
            const response = await addMessage(sender,newMessage)
            setNewMessage('sending...')
        } catch (error) {
            console.log(err);
            alert('Something Went Wrong')
        }finally{
            setNewMessage('')
        }
        
    }


  return (
    <div className='message-send'>
      <div className='type'>
      <input type="text" className='input-box' value={newMessage} name="newMessage" id="newMessage" onChange={(e) => setNewMessage(e.target.value)} />
      </div>
      <div className='send-icon'>
      <BiSend color='white' onClick={ () => add() }/>
      </div>
    </div>
  )
}

export default MessageSendBox
