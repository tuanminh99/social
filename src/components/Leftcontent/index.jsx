import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "./../../assets/img/avatar.jpeg";
import Ads from "./../../assets/img/ads.jpg";
import { Button, Layout, Menu } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ContactsOutlined,
  FileImageOutlined,
  ProfileOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
const { Sider } = Layout;

export const LeftContent = () => {
  return (
    <div>
      <WrapperCol1>
        <Col1>
          <Left1>
            <ProfileInfo>
              <ProfileImg>
                <img
                  src={Avatar}
                  alt=""
                  width="30px"
                  height="30px"
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
              </ProfileImg>

              <ProfileName>
                <Name>Alexandra Borke</Name>
                <Nickname>@alexsunshine</Nickname>
              </ProfileName>
            </ProfileInfo>
          </Left1>
          <Left2>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  Home
                </Menu.Item>
                <Menu.Item key="2" icon={<ContactsOutlined />}>
                  People
                </Menu.Item>
                <Menu.Item key="3" icon={<FileImageOutlined />}>
                  Photos
                </Menu.Item>
                <Menu.Item key="4" icon={<ProfileOutlined />}>
                  News Feed
                </Menu.Item>
                <Menu.Item key="5" icon={<UserOutlined />}>
                  Profile
                </Menu.Item>
                <Menu.Item key="6   " icon={<SettingOutlined />}>
                  Settings
                </Menu.Item>
              </Menu>
            </Sider>
          </Left2>

          <WrapInvitation>
            <Invitation>INVITATIONS</Invitation>
          </WrapInvitation>
          <Left3>
            <ImgAds>
              <img
                src={Ads}
                alt=""
                width="170px"
                height="300px"
                style={{ objectFit: "cover" }}
              />
              <AdsText>
                <p>How To Build A Strong Company</p>
              </AdsText>
              <AvatarImg>
                <img
                  src={Avatar}
                  alt=""
                  width="30px"
                  height="30px"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
              </AvatarImg>
              <ButtonAccept>
                <Button type="primary" shape="round">
                  Accept Invitation
                </Button>
              </ButtonAccept>
              <BtnAdsSearch>
                <Button shape="circle" icon={<SearchOutlined />} />
              </BtnAdsSearch>
            </ImgAds>
          </Left3>
        </Col1>
      </WrapperCol1>
    </div>
  );
};

const InviNumber = styled.div`
  margin-right: 20px;
  margin-top: 17px;
`;

const WrapInvitation = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nickname = styled.div`
  color: #767676;
`;

const Name = styled.div`
  font-weight: 700;
`;

const BtnAdsSearch = styled.div`
  position: absolute;
  right: 13px;
  bottom: 11px;
`;
const ButtonAccept = styled.div`
  position: absolute;
  bottom: 10px;
`;

const AvatarImg = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`;

const AdsText = styled.div`
  position: absolute;
  bottom: 55px;
  color: white;
  font-weight: 700;
  left: 25px;
`;

const ImgAds = styled.div`
  margin-top: 10px;
  padding: 15px 15px 50px 15px;
  position: relative;
`;

const WrapperCol1 = styled.div`
  /* padding: 0 0 0 50px; */
`;

const Invitation = styled.div`
  margin-top: 20px;
  font-weight: 700;
  color: #767676;
`;

const Left3 = styled.div`
  background: white;
  width: fit-content;
  height: auto;
  border-radius: 10px;
`;

const ProfileImg = styled.div`
  padding: 7px 0;
`;

const ProfileName = styled.div`
  padding: 0 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  padding: 20px 20px;
`;
const Left2 = styled.div`
  margin-top: 25px;
  background: white;
  width: fit-content;
  height: auto;
  border-radius: 10px;
`;
const Left1 = styled.div`
  background: white;
  width: fit-content;
  height: auto;
  border-radius: 10px;
`;
const Col1 = styled.div``;
