import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../Database/firebase';
import './style.css'

function Chat() {
    const [chatData, setChatData] = useState([]);
    const [message, setMessage] = useState('');
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(false);


    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const fetchData = async () => {
        try {
            const user = await new Promise((resolve) => {
                const unsubscribe = onAuthStateChanged(auth, resolve);
                return unsubscribe;
            });

            if (user) {
                setUserId(user.uid);
                console.log("uid", user.uid);
            } else {
                console.log("user is logged out");
            }
        } catch (error) {
            console.error('Error fetching user data:', error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:3200/api/chat/all`)
            .then(response => {
                setChatData(response.data);
            })
            .catch(error => {
                alert('Error fetching data:', error.message);
                console.log(error);
            });
    }, []);

    const sendMessage = async () => {
        setLoading(true);
        if (message.trim() !== '') {
            const messageData = {
                message: message,
                userId: userId
            };

            try {
                await axios.post('http://localhost:3200/api/chat/add', messageData);
                console.log('Message sent successfully');
                setLoading(false);
                try {
                   
        
                    // Fetch updated chat data
                    const updatedChatData = await axios.get('http://localhost:3200/api/chat/all');
                    
                    // Update the chatData state with the new data
                    setChatData(updatedChatData.data);
                    
                    // Clear the message input after sending
                    setMessage('');
                } catch (error) {
                    alert('Error sending message:', error.message);
                    console.log(error);
                }
                // Optionally, you can fetch updated chat data here and update the state
            } catch (error) {
                alert('Error sending message:', error.message);
                console.log(error);
            }
        }
    };

    return (
        <div className="hub">
            <div className='chat'>
            {chatData.map((item, index) => (
                <ul key={index} className='d-flex flex-column justify-content-end'>
                    <li className={  item.userId == userId? "align-self-end my-massage":"align-self-start your-message"}>{item.message}<small>{new Date(item.date).toLocaleTimeString()}</small></li>
                   
                </ul>
            ))}
          <div className="chat-bottom d-flex flex-column ">
           {
            loading?(
                <div className="loading-container align-self-end">
                <div className="loading">
                  sending...
                </div>
            </div>
            ):(null)
           }
       
          </div>
        </div>
        <div className="chat-send">
        <input type="text" value={message} onChange={handleInputChange} placeholder='lets discuss...' />
            <button onClick={sendMessage}>Send</button>
        </div>
        </div>
    );
}

export default Chat;
