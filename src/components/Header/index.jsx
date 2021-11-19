import { Button } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import imgSearch from "./../../assets/svg/search_icon.svg";
import Search from "./../search";
import Avatar from "./../../assets/img/avatar.jpeg";
import { Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;

export const Header = () => {
  const [search, setSearch] = useState();

  return (
    <div>
      <Container>
        <HeaderImg>
          <Image>
            <img
              src={Avatar}
              alt=""
              width="30px"
              height="30px"
              style={{ borderRadius: "10px", objectFit: "cover" }}
            />
          </Image>
          <div
            style={{ color: "black", marginLeft: "10px", fontWeight: "700" }}
          >
            Spacepark
          </div>
        </HeaderImg>
        <SearchBar>
          <div>
            <Search
              imgSearch={imgSearch}
              value={search}
              onChange={setSearch}
              setSearch={setSearch}
            />
          </div>
          <ButtonAdd>
            <Button type="primary" shape="round" icon={<SearchOutlined />}>
              Search
            </Button>
          </ButtonAdd>
          <Image>
            <img
              src={Avatar}
              alt=""
              width="30px"
              height="30px"
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                marginLeft: "10px",
              }}
            />
          </Image>
        </SearchBar>
      </Container>
    </div>
  );
};

const HeaderImg = styled.div`
  display: flex;
`;

const Image = styled.div`
  /* margin-left: 10px; */
`;

const ButtonAdd = styled.div`
  z-index: 10;
  margin-left: 10px;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: end;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 20px 0px;
`;
