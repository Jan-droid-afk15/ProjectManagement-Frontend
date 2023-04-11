import React, { useEffect } from "react";
import IndexNav from "../../IndexNav";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Content,
  LeftSide,
  RightSide,
  LeftWrapper,
  Title,
  Text,
  Button,
  SvgItem,
} from "./Styled";

const Index = () => {
  let navigate = useNavigate();
  useEffect(() => {
    document.title = "Logo"
  }, [])
  return (
    <>
      <IndexNav />
      <Container>
        <Content>
          <LeftSide>
            <LeftWrapper>
              <Title>Improve your Productivity with Logo</Title>
              <Text>
              Manage, Collab and visualise your projects right now
              </Text>
              <Button onClick={() => navigate("/register")}>
                LEARN MORE
              </Button>
            </LeftWrapper>
          </LeftSide>
          <RightSide>
            <SvgItem src="https://img.freepik.com/free-vector/business-people-scheduling-work-tasks_1262-19720.jpg?w=740&t=st=1679315575~exp=1679316175~hmac=4fb20dbacc0496a757f0aa7e99b22b8d945fa8493ced24621ab8f472e56e17b5" />
          </RightSide>
        </Content>
      </Container>
    </>
  );
};

export default Index;
