import React from "react";
import { FoldCard } from "./FoldCard.js";
import { OpenCard } from "./OpenCard.js";

// when FoldCard is clicked, it will be changed to OpenCard
export const Card = ({ typetag, linetag, title, content }) => {
  const [isFold, setIsFold] = React.useState(true);
  const handleClick = () => {
    setIsFold(!isFold);
  };
  return isFold ? (
    <FoldCard
      typetag={typetag}
      linetag={linetag}
      title={title}
      onClick={handleClick}
    />
  ) : (
    <OpenCard
      typetag={typetag}
      linetag={linetag}
      title={title}
      content={content}
      onClick={handleClick}
    />
  );
};
