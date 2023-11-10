import React from 'react';
import './Layout.css'; // 스타일 파일 import// 첫 번째 아이콘 이미지 경로
// import icon2 from '../public/headerImg/icon_warning.png'; // 두 번째 아이콘 이미지 경로


const Layout = () => {
  return (
    <div className="header-container">
      <div className="header-titles">
        <a href="./UserPage">
          <img
            src="./headerImg/icon_person.png"
            alt="Icon 1"
            className="icon"
          />
        </a>
        
        <a href="/">
          <div className="title-wrapper">
            <h1 className="header-title">Subway - Line 10</h1>
          </div>
        </a>
        <a href="./AdminSettingPage">
          <img
            src="./headerImg/icon_warning.png"
            alt="Icon 2"
            className="icon"
          />
        </a>
      </div>
    </div>
  );
};
export default Layout;
