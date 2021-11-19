import React, { useState } from "react";
import { Menu } from "antd";
import { LeftContent } from "./Leftcontent";
import { Header } from "./Header";
import styled from "styled-components";
import { CenterContent } from "./Centercontent";
import { RightContent } from "./Rightcontent";
const { SubMenu } = Menu;

export const Social = () => {
  return (
    <Wrapper>
      <Header />
      <Contents>
        <LeftContent />
        <CenterContent />
        <RightContent />
      </Contents>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 0 50px;
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-gap: 30px;
`;
