import React from "react";
import { useState, useEffect } from "react";

const ChatWindow = () => {
  const [userText, setUserText] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages((prev) => {
      return [{ text: userText, user: "user" }, ...prev];
    });

    //Todo : send Message form dialogflow
    setUserText("");
    setTimeout(() => {
      setMessages((prev) => {
        return [{ text: "Hello from Server ", user: " ChatBot" }, ...prev];
      });
    }, 1000);
  };
  return (
    <>
      <div>ChatWindow</div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <div>
        {messages.map((message, index) => {
          return (
            <>
              <h3 key={index}>{message.user}: </h3>
              <p key={index}> {message.text}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ChatWindow;
