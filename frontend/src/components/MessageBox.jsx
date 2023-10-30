import React from 'react'

const MessageBox = ({ name , email , message ,currentUser}) => {

  const side = email === currentUser ? 'my-side' : 'other-side'

  return (
    <div>
      <div className={`username text-${side}`}>{name}</div>
    <div className={`message-box ${side}`}>
      {message}
    </div>
    </div>
  )
}

export default MessageBox
