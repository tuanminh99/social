import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { animated } from "react-spring";
import { Button, Form, Input } from "antd";
import {
  DownloadOutlined,
  FacebookOutlined,
  GooglePlusOutlined,
  LinkedinOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Wrapper = styled(animated.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Fb = styled.div``;
const Gg = styled.div`
  padding-left: 10px;
`;
const In = styled.div`
  padding-left: 10px;
`;
const SocialNet = styled.div`
  display: flex;
`;

const FbIcon = styled(FacebookOutlined)`
  svg {
    width: 30px;
    height: 30px;
  }
`;
const GgIcon = styled(GooglePlusOutlined)`
  svg {
    width: 30px;
    height: 30px;
  }
`;
const InIcon = styled(LinkedinOutlined)`
  svg {
    width: 30px;
    height: 30px;
  }
`;
const WrapInput = styled.div`
  margin-top: 20px;
`;

const SigninInput = styled(Input)`
  input {
    background-color: #f4f8f7;
  }
`;

export const SignInForm = ({ style = {} }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "", password: "" },
  });

  const handleSignIn = handleSubmit((data) => {
    console.log(data);
    // TODO: call api to login
  });

  return (
    <Wrapper style={style}>
      <h1 style={{ color: "#1d998c" }}>Sign In</h1>

      <SocialNet>
        <Fb>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FbIcon style={{ color: "black" }} />
          </a>
        </Fb>
        <Gg>
          <a href="https://mail.google.com/" target="_blank" rel="noreferrer">
            <GgIcon style={{ color: "black" }} />
          </a>
        </Gg>
        <In>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <InIcon style={{ color: "black" }} />
          </a>
        </In>
      </SocialNet>
      <p style={{ color: "grey", marginTop: "20px" }}>
        or use your email account
      </p>
      <WrapInput>
        <Form.Item>
          <Controller
            control={control}
            name="username"
            render={({ field: { value, onChange, onBlur } }) => (
              <SigninInput
                {...{ value, onChange, onBlur }}
                prefix={<UserOutlined />}
                placeholder="Email"
                style={{ backgroundColor: "#f4f8f7", border: "none" }}
              />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange, onBlur } }) => (
              <SigninInput
                {...{ value, onChange, onBlur }}
                type="password"
                prefix={<LockOutlined />}
                placeholder="Password"
                style={{ backgroundColor: "#f4f8f7", border: "none" }}
              />
            )}
          />
        </Form.Item>
      </WrapInput>
      <Button
        type="default"
        shape="round"
        onClick={handleSignIn}
        style={{ background: "#1d998c", color: "white" }}
      >
        Sign In
      </Button>
    </Wrapper>
  );
};
