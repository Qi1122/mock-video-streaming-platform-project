import React, {useState, useEffect, useRef} from 'react';
import './styles.css';

const Chat = () => {
    const [jsonData, setJsonData] = useState({});
    const [messages, setMessages] = useState([]);
    const [messageIndex, setMessageIndex] = useState(0);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        fetch('./chatScriptNew.json')
            .then(response => response.json())
            .then(response => setJsonData(response))
            .catch(error => console.error('Error fetching JSON:', error));
    }, []);


    useEffect(() => {
        if (jsonData.contents && messageIndex < jsonData.contents.length) {
            const timer = setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    jsonData.contents[messageIndex]
                ]);
                setMessageIndex((prevIndex) => prevIndex + 1);
            }, 500); // 每 500 毫秒添加一条消息

            //chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            //chatContainerRef.current.scrollTop = chatContainerRef.current.scrollTo(0, 0);;
            return () => clearTimeout(timer);
        }
    }, [jsonData, messageIndex]);

    useEffect(() => {
        // Scroll to the bottom of the chat container when messages are updated
        console.log("scroll to bottom")
        chatContainerRef.current.scrollBottom = chatContainerRef.current.scrollHeight - chatContainerRef.current.offsetHeight;
    }, [messages]); // Run this effect whenever messages change


    return (
        <div className="app-container">
            <div className="chat-container" ref={chatContainerRef}>
                <ol>
                    {messages.map((message, index) => (
                        <ul key={index} className="message">
                            {<span>{message.name}</span>}{message.content}{<span className="tip shine">{message.tip}</span>}
                            {/*{<span className="name">{message.name}</span>} : {message.content}{<span className="tip">{message.tip}</span>}*/}
                        </ul>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Chat;
