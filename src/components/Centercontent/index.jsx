import { Button } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "./../../assets/img/avatar.jpeg";
import Ads from "./../../assets/img/ads.jpg";
import imgSearch from "./../../assets/svg/search_icon.svg";
import Search from "./../search";
import { SearchOutlined } from "@ant-design/icons";
import SearchWithImg from "../SearchWithImg";

export const CenterContent = () => {
  const items = [
    {
      background: (
        <img
          src={Ads}
          alt=""
          width="140px"
          height="220px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
      name: "Nguyễn Tuấn Minh",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Ads}
          alt=""
          width="140px"
          height="220px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
      name: "Nguyễn Tuấn Minh",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Ads}
          alt=""
          width="140px"
          height="220px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
      name: "Nguyễn Tuấn Minh",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Ads}
          alt=""
          width="140px"
          height="220px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
      name: "Nguyễn Tuấn Minh",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Ads}
          alt=""
          width="140px"
          height="220px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
      name: "Nguyễn Tuấn Minh",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Ads}
          alt=""
          width="140px"
          height="220px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
      name: "Nguyễn Tuấn Minh",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
    },
    {
      background: (
        <img
          src={Ads}
          alt=""
          width="140px"
          height="220px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
      name: "Nguyễn Tuấn Minh",
      avatar: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ),
    },
  ];

  const [search, setSearch] = useState();
  return (
    <WrappStory>
      <Story>
        {items.map((item, i) => (
          <Left3>
            <ImgAds>
              {item.background}
              <AdsText>
                <p>{item.name}</p>
              </AdsText>
              <AvatarImg>{item.avatar}</AvatarImg>
            </ImgAds>
          </Left3>
        ))}
      </Story>
      <SearchBar>
        <div>
          <SearchWithImg
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
      </SearchBar>
    </WrappStory>
  );
};

const ButtonAdd = styled.div`
  z-index: 10;
  margin-left: 10px;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 30px;
  margin-left: 7px;
`;

const Story = styled.div`
  display: flex;
`;

const AvatarImg = styled.div`
  position: absolute;
  top: 30px;
  left: 22px;
`;
const AdsText = styled.div`
  position: absolute;
  bottom: 10px;
  color: white;
  font-weight: 700;
  left: 25px;
`;

const ImgAds = styled.div`
  margin-top: 10px;
  position: relative;
`;

const Left3 = styled.div`
  /* background: white; */
  width: fit-content;
  height: auto;
  border-radius: 10px;
  padding: 0 10px;
`;

const WrappStory = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
`;
