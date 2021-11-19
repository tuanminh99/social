import React, { useState } from "react";
import styled from "styled-components";
import { Button, Dropdown, Layout, Menu } from "antd";
import Avatar from "./../../assets/img/avatar.jpeg";
const { SubMenu } = Menu;
const { Sider } = Layout;

export const RightContent = () => {
  function handleMenuClick(e) {
    console.log("click", e);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );
  const items = [
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
    {
      img: (
        <img
          src={Avatar}
          alt=""
          width="30px"
          height="30px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      ),
      name: "Alexandra Borke",
      dropbtn: <Dropdown.Button overlay={menu}></Dropdown.Button>,
    },
  ];
  return (
    <WrapperCol3>
      <Right1>
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
            <Des>wants to add you to friends</Des>
          </ProfileName>
        </ProfileInfo>
        <WrapBtn>
          <div>
            <Button type="primary" shape="round">
              Accept
            </Button>
          </div>
          <div>
            <Button type="outlined" shape="round">
              Decline
            </Button>
          </div>
        </WrapBtn>
      </Right1>
      <Right2>
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
            <Des>wants to add you to friends</Des>
          </ProfileName>
        </ProfileInfo>
        <WrapBtn>
          <div>
            <Button type="primary" shape="round">
              Accept
            </Button>
          </div>
          <div>
            <Button type="outlined" shape="round">
              Decline
            </Button>
          </div>
        </WrapBtn>
      </Right2>
      <Right3>
        <ContactInfo>
          {items.map((item, i) => (
            <>
              <WrapContact>
                <ContactImg>{item.img}</ContactImg>

                <ContactName>
                  <Name>{item.name}</Name>
                  <DropBtn>{item.dropbtn}</DropBtn>
                </ContactName>
              </WrapContact>
            </>
          ))}
        </ContactInfo>
      </Right3>
    </WrapperCol3>
  );
};

const WrapContact = styled.div`
  display: flex;
`;

const Des = styled.div``;
const DropBtn = styled.div``;

const WrapBtn = styled.div`
  display: flex;
  padding: 0px 20px 10px;
  justify-content: space-between;
`;

const Name = styled.div`
  font-weight: 700;
`;

const ProfileName = styled.div`
  padding: 0 10px;
`;

const ContactName = styled.div`
  display: flex;
  padding: 10px 10px;
`;

const ProfileImg = styled.div`
  padding: 7px 0;
`;
const ContactImg = styled.div`
  padding: 7px 0;
`;

const ProfileInfo = styled.div`
  display: flex;
  padding: 20px 20px 20px;
`;

const ContactInfo = styled.div`
  display: block;
  padding: 20px 18px 20px;
`;

const Right1 = styled.div`
  float: right;
  background: white;
  width: fit-content;
  height: auto;
  border-radius: 10px;
`;
const Right2 = styled.div`
  margin-top: 20px;
  float: right;
  background: white;
  width: fit-content;
  height: auto;
  border-radius: 10px;
`;

const Right3 = styled.div`
  margin-top: 20px;
  float: right;
  background: white;
  width: fit-content;
  height: auto;
  border-radius: 10px;
`;

const WrapperCol3 = styled.div``;
