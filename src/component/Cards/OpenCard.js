import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Tag } from "../Tags/Tag.js";

const Title = styled.div(
  css`
    width: fit-content;
    height: fit-content;
    color: #202457;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  `
);

const Content = styled.div(
  css`
    width: fit-content;
    height: fit-content;
    color: rgba(32, 36, 87, 0.9);
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `
);

const Card = styled.div(
  () =>
    css`
      display: flex;
      width: 323px;
      padding: 10px 20px;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      border-top: 1px solid #202457;
      background: #fff;
    `
);

const TagInnerBox = styled.div(
  () =>
    css`
      display: flex;
      justify-content: flex-end;
      padding: 0px 20px;
      align-items: flex-start;
      gap: 5px;
      align-self: stretch;
    `
);

export const OpenCard = ({ typetag, linetag, title, content, onClick }) => (
  <Card onClick={onClick}>
    <TagInnerBox>
      <Tag typetag={typetag} linetag={linetag} />
    </TagInnerBox>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Card>
);
