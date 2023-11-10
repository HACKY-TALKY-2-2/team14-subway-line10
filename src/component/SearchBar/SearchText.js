import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const SearchBox = styled.div(
  () =>
    css`
      display: flex;
      width: 330px;
      height: 28px;
      padding: 2px 8px;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border: 1px solid rgba(32, 36, 87, 0.3);
      background: var(--white, #fff);
    `
);

export const SearchText = ({onChange}) => (
  <SearchBox>
    <img src="SearchIcon.png" alt="SearchIcon" height={15} />
    <input type="text" placeholder="검색어를 입력하세요" onChange={onChange} />
  </SearchBox>
);
