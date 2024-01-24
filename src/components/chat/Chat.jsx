import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../Database/firebase';
import './style.css'
import { Person, PersonOffOutlined, VerifiedUser } from '@mui/icons-material';

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
        axios.get(`https://dull-trousers-deer.cyclic.app/api/chat/all`)
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
                await axios.post('https://dull-trousers-deer.cyclic.app/api/chat/add', messageData);
                console.log('Message sent successfully');
                setLoading(false);
                try {
                   
        
                    // Fetch updated chat data
                    const updatedChatData = await axios.get('https://dull-trousers-deer.cyclic.app/api/chat/all');
                    
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
       <div>
         <div className="top d-flex gap-3 align-items-center bg-light p-2">
     
        <Person className='fs-1 border rounded-5'/>
        <div>
            <span className="d-block fs-4 fw-bold">Discussion Hub</span>
            <span className="text-success fs-5">Online</span>
        </div>
    </div>
        <div className="hub">
           
            <div className='chat'>
            {chatData.map((item, index) => (
                <ul key={index} className='d-flex flex-column justify-content-end'>
                    <li className={  item.userId == userId? "align-self-end my-massage":"align-self-start your-message"}>{item.message}</li>
                    {/* <small>{new Date(item.date).toLocaleTimeString()}</small> */}
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
       </div>
    );
}

export default Chat;
