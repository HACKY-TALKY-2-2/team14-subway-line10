import React from 'react';
import './StringInput.css';
function StringInput({ value, onChange, type = "text", placeholder }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="string-input"
      placeholder={placeholder}
    />
  );
}

export default StringInput;