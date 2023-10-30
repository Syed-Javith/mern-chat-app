import React, { useEffect, useState } from "react";
import "../styles/Chat.css";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { getMessages } from "../apis/Messages";
import { logoutUser } from "../apis/Login";
import MessageBox from "../components/MessageBox";
import MessageSendBox from "../components/MessageSendBox";

const ChatPage = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const [user, setUser] = useState(cookies.get("user"));
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const currentMessages = await getMessages();
      setMessages(currentMessages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [ messages]);

  useEffect(()=>{

    // console.log(user);

    if(user === null || user === undefined ){
      navigate('/')
    }

  },[user])

  const logout = () => {
    logoutUser();
    setUser(null);
    navigate('/')
  }

  return (
    <div className="chat">
      <button className="logout" onClick={() => logout()}>Logout</button>
      <h1>
        Welcome <span>{user?.name}</span>
      </h1>
      {/* <input type="submit" value="logout" onClick={ () => { 
        setUser(null)
        logout();
      } } /> */}


      <div className="message-area">
        {
          messages.map((message)=>{
            return <MessageBox key={message.chats._id} currentUser={user?.email} email={message.email} name={message.name} message={message.chats.message} />
          })
        }
        
      </div>

      <MessageSendBox sender={user?.email} />
    </div>
  );
};

export default ChatPage;
