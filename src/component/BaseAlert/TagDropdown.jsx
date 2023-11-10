import React from 'react';
import './TagDropdown.css'; // CSS 파일 임포트

const TagDropdown = ({ options, onChange }) => {
  return (
    <select className="tag-dropdown" onChange={(e) => onChange(e.target.value)}>
      <option value="">사건의 종류를 알려주세요!</option>
      {options && options.map((tag) => (
        <option key={tag} value={tag}>
          {tag}
        </option>
      ))}
    </select>
  );
};

export default TagDropdown;