// import "./styles.css";
import styled from "styled-components";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
import { Button } from "antd";

const Wrapper = styled.div`
  width: 70vw;
  height: 70vh;
  position: relative;
  z-index: 0;
  display: flex;
  margin: 100px auto;
`;

const LabelCol = styled(animated.div)`
  position: absolute;
  z-index: 5;
  height: 100%;
  width: 33%;
  /* background: url("https://vcdn-thethao.vnecdn.net/2021/09/17/20d6bd7a3fe04461a61ed0452613bc-4554-3292-1631868006.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; */
  background-color: #3ab299;
`;

const Blur = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 128, 128, 0.5);
  backdrop-filter: blur(4px);
`;

const InputCol = styled(animated.div)`
  position: absolute;
  height: 100%;
  width: 67%;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export default function SignInSignup() {
  const [isSignIn, setSignIn] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: isSignIn ? 0 : 1,
    config: { duration: 500 },
  });

  const handleToggle = () => {
    setSignIn(!isSignIn);
  };

  return (
    <Wrapper>
      <LabelCol
        style={{
          marginLeft: x.to({ range: [0, 1], output: ["0%", "67%"] }),
          width: x.to({
            range: [0, 0.55, 1],
            output: ["33%", "60%", "33%"],
          }),
        }}
      >
        <Blur>
          <Button
            type="default"
            shape="round"
            onClick={handleToggle}
            style={{
              background: "#1d998c",
              color: "white",
              border: "1px solid white",
            }}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </Button>
        </Blur>
      </LabelCol>
      <InputCol
        style={{
          marginLeft: x.to({ range: [0, 1], output: ["33%", "0%"] }),
        }}
      >
        <FormWrapper>
          <SignInForm
            style={{
              opacity: x.to({ range: [0, 1], output: [1, 0] }),
              zIndex: x.to({ range: [0, 1], output: [1, 0] }),
            }}
          />
          <SignUpForm
            style={{
              opacity: x.to({ range: [0, 1], output: [0, 1] }),
              zIndex: x.to({ range: [0, 1], output: [0, 1] }),
            }}
          />
        </FormWrapper>
      </InputCol>
    </Wrapper>
  );
}
