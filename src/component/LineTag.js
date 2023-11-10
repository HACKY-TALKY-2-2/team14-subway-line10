import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const tagNames = {
  lineAll: "수도권 전노선",
  lineTwo: "2호선",
};

const TagInner = styled.div(
  css`
    font-size: 10px;
    font-weight: 500;
    color: #202457;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `
);

const TagBox = styled.div(
  () =>
    css`
      align-items: center;
      justify-content: center;
      padding: 2px 10px;
      width: fit-content;
      height: fit-content;
      display: flex;
      border-radius: 2px;
      background: #ede9ff;
      gap: 5px;
    `
);

export const LineTag = ({ type }) => (
  <TagBox>
    <TagInner type={type}>#{tagNames[type]}</TagInner>
  </TagBox>
);
