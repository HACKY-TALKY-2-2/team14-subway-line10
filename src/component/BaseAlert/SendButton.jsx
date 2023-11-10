import React from 'react';
import './SendButton.css' // CSS 파일을 임포트합니다

const SendButton = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default SendButton;
