import React from 'react';
import './Layout.css'; // 스타일 파일 import// 첫 번째 아이콘 이미지 경로
// import icon2 from '../public/headerImg/icon_warning.png'; // 두 번째 아이콘 이미지 경로

const Layout = () => {
  return (
  <div className="header-container">
    <div className="header-titles">
    <img src='./headerImg/icon_person.png' alt="Icon 1" className="icon" />
    <div className="title-wrapper">
        <h1 className="header-title">Subway - Line 10</h1>
        <h2 className="header-subtitle">시민 편집 페이지</h2>
    </div>
    <a href = './BaseAlert'>
      <img src='./headerImg/icon_warning.png' alt="Icon 2" className="icon" />
    </a>
    </div>
</div>
  );
}
export default Layout;