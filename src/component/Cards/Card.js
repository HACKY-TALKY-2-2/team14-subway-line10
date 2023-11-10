import React from "react";
import { FoldCard } from "./FoldCard.js";
import { OpenCard } from "./OpenCard.js";

// when FoldCard is clicked, it will be changed to OpenCard
export const Card = ({ type, title, content, date, time, location }) => {
  const [isFold, setIsFold] = React.useState(true);
  const handleClick = () => {
    setIsFold(!isFold);
  };
  return isFold ? (
    <FoldCard
      typetag="announcement"
      linetag="lineAll"
      title="수도권 지하철 파업 (11/9~11/10)"
      onClick={handleClick}
    />
  ) : (
    <OpenCard
      typetag="announcement"
      linetag="lineAll"
      title="수도권 지하철 파업 (11/9~11/10)"
      content="지하철 노조 파업으로 인해 11월 9일부터 11월 10일까지 수도권 전 지하철 노선이 운행을 중단합니다."
      onClick={handleClick}
    />
  );
};
