import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { animated } from "react-spring";
import {
  FacebookOutlined,
  GooglePlusOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Wrapper = styled(animated.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

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

export const SignUpForm = ({ style = {} }) => {
  const form = useForm({
    defaultValues: { username: "", password: "", confirmPassword: "" },
  });
  const { control, handleSubmit } = form;

  const handleSignUp = handleSubmit((data) => {
    console.log(data);
    // TODO: call api to sign up
  });

  return (
    <Wrapper style={style}>
      <h1>Create Account</h1>
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
      <Controller
        control={control}
        name="username"
        render={({ field: { value, onChange, onBlur } }) => (
          <input {...{ value, onChange, onBlur }} />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange, onBlur } }) => (
          <input {...{ value, onChange, onBlur }} type="password" />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { value, onChange, onBlur } }) => (
          <input {...{ value, onChange, onBlur }} type="password" />
        )}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </Wrapper>
  );
};
