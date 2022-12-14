import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'

let endPoint = 'http://localhost:5000/'
let socket = io.connect(`${endPoint}`)

function App() {
  const [messages, setMessages] = useState([
    'hello and welcome'
  ])
  const [message, setMessage] = useState('')

  useEffect(() => {
    getMessages()
  }, [messages.length])


  const getMessages = () => {
    socket.on('message', msg => {
      setMessages([...messages, msg])
    })
  }


const onChange = e => {
  setMessage(e.target.value)
}

const onClick = () => {
  if (message !== '') {
    socket.emit('message', message)
    setMessage('')
  } else {
    alert('please add messagee')
  }
}


  return (
    <>
      <div>
        {messages.length > 0 && messages.map(msg => (
          <div>
            <p>{msg}</p>
          </div>
        ))}
        <input value={message} name='message' onChange={e => onChange(e)} />
        <button onClick={() => onClick()}>Send Message</button>
      </div>
    </>
  );
}

export default App;
