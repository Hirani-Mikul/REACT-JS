import React, { useContext, useState } from 'react';

import '../icons/css/all.min.css';
import '../style.css';
import '../utils.css';
import { GlobalContext } from '../Utils/Context/GlobalContext';
import useGetTime from '../Utils/GetTime';

const Form = () => {
  const [input, setInput] = useState('');
  const [getTime, setGetTime] = useState(false);
  const time = useGetTime(getTime);

  const { message_ID_COUNTER, sendMessage } = useContext(GlobalContext);

  const [showEmojis, setShowEmojis] = useState(false);

  const getID = () => {
    let message_id = message_ID_COUNTER;
    message_id++;
    return message_id;
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    setGetTime(!getTime);
    const m_id = getID();
    sendMessage(input, m_id, time);
    setInput('');
  };

  const chooseEmoji = (e) => {
    if (e.target.tagName == 'LI') {
      setInput((prevInput) => prevInput + e.target.innerHTML);
      setShowEmojis(false);
    } else return;
  };

  const handleClick = (e) => {
    const selectedElement = e.target.getAttribute('data-atr');

    if (selectedElement === 'emoji') setShowEmojis(!showEmojis);
    else if (selectedElement === 'camera') console.log('CAMERA');
    else if (selectedElement === 'record') console.log('RECORDING');
    else return;
  };

  return (
    <div className='message-form'>
      <form
        className={`${showEmojis && 'showEmojis'} align-center flex-row`}
        onSubmit={handleSubmit}
      >
        <div className='emoji-items'>
          <ul onClick={chooseEmoji} className='flex-column space-around'>
            <li>Hey, what's up?</li>
            <li>What you doing?</li>
            <li>I'm fine...</li>
            <li>Where are you?</li>
            <li>Are you coming?</li>
          </ul>
        </div>
        <i data-atr='emoji' onClick={handleClick} className='fas fa-smile'></i>
        <input autoFocus type='text' value={input} onChange={handleChange} />
        <i
          data-atr='camera'
          onClick={handleClick}
          className='fas fa-camera'
        ></i>
      </form>
      <div className='record-button flex-center'>
        <i
          data-atr='record'
          onClick={handleClick}
          className='fas fa-microphone'
        ></i>
      </div>
    </div>
  );
};

export default Form;
