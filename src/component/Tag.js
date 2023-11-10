import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TypeTag } from "../component/TypeTag.js";
import { LineTag } from "../component/LineTag.js";

const TagBox = styled.div(
  () =>
    css`
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 5px;
      align-self: stretch;
      background: #ffffff;
    `
);

export const Tag = ({ typetag, linetag }) => (
  <TagBox>
    <TypeTag type={typetag} /> <LineTag type={linetag} />
  </TagBox>
);
