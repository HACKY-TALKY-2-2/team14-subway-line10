import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const tagNames = {
  announcement: "서비스공지",
  service_disruption: "운행장애",
  railway_accident: "철도안전사고",
  train_accident: "열차사고",
  casuality: "사상사고",
  disaster: "재난",
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
      background: rgba(32, 36, 87, 0.3);
    `
);

export const TypeTag = ({ type }) => (
  <TagBox>
    <TagInner type={type}>#{tagNames[type]}</TagInner>
  </TagBox>
);
