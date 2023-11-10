
import { useState } from 'react';
import StringInput from '../component/BaseAlert/StringInput.jsx';
import Header from '../component/layout/Layout.jsx';
import SendButton from '../component/BaseAlert/SendButton.jsx';
import axios from 'axios';
import TagDropdown from '../component/BaseAlert/TagDropdown.jsx';
// TagDisplay 컴포넌트: 선택된 태그를 보여주는 부분
const TagDisplay = ({ tags, onTagClick }) => {
  return (
    <div>
      {tags.map((tag, index) => (
        <div
          key={index}
          style={{
            display: 'inline-block',
            margin: '5px',
            padding: '5px',
            color: 'black',
            backgroundColor: getColor(index),
            cursor: 'pointer',
          }}
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

// getColor 함수: 인덱스에 따라 다른 색상을 반환
const getColor = (index) => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FF33F9'];
  return colors[index % colors.length];
};


export function UserPage() {
  const lineOptions = ['2호선'];
  const [eventOptions, setEventOptions] = useState(['서비스공지', '운행장애']);
  // const [selectedLine, setSelectedLine] = useState('2호선');
  const [stationValue, setstationValue] = useState('');
  const [stationList, setstationList] = useState(['역삼역']);
  const [selectedTags, setSelectedTags] = useState([]);
  
  // // 에러 생길시 이 파트 수정 바랍니다.
  // useState(() => {
  //   const response = axios.get('http://localhost:5000//api/post-types')
  //   console.log(response);
  //   response.data.forEach(element => {
  //   setEventOptions([...eventOptions, element.name]);
  //   });
  // }, []);
  
  // const handleSelect = (value) => {
  //   console.log(`Selected: ${value}`);
  //   setSelectedLine(value);
  // };

  const handleStationChange = (e) => {
    setstationValue(e.target.value);
  };

  ////////////////////////////

  const handleTagChange = (selectedTag) => {
    if (!selectedTags.includes(selectedTag) && selectedTag !== '') {
      setSelectedTags([...selectedTags, selectedTag]);
    }
  };

  const handleTagClick = (clickedTag) => {
    const updatedTags = selectedTags.filter((tag) => tag !== clickedTag);
    setSelectedTags(updatedTags);
  };
  ////////////////////////////
  const userId = 1111;
  const userType = 1;
  const [accidentTitle, setAccidentTitle] = useState('');
  const [accidentContent, setAccidentContent] = useState('');
  const stationIdCheck = (stationName) => {
    for (let i = 0; i < stationList.length; i++) {
      if (stationList[i] === stationName) {
        return i;
      }
    }
    return -1;
  }
  const stationId = stationIdCheck(stationValue);
  const handleSubmit = async () => {
    // console.error(userId,
    //   userType: userType,
    //   title: accidentTitle,
    //   content: accidentContent,
    //   stationId: stationId,
    //   typeId: selectedTags);
    
    await axios.post('http://localhost: /submit', {
      userId: userId,
      userType: userType,
      title: accidentTitle,
      content: accidentContent,
      stationId: stationId,
      typeId: selectedTags,
    })
    ?.then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('에러~', error);
    });
  };

  return (
    <div>
    <Header />
    <div style={{ display:'grid', justifyItems: 'center'}}>
        <h2>유저 설정 페이지</h2>

        <StringInput
        value={stationValue}
        onChange={handleStationChange}
        placeholder="공지를 받을 역 이름을 입력해주세요!"
        />
        <br />
        <a href='/' style={{ textDecoration: 'none' }}>
        <SendButton text="확인" onClick={handleSubmit} />
        </a>
    </div>
    </div>
  );
}