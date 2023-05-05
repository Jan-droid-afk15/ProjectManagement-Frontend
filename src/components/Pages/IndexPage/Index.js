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
    document.title = "KanbanGo"
  }, [])
  return (
    <>
      <IndexNav />
      <Container>
        <Content>
          <LeftSide>
            <LeftWrapper>
              <Title>Improve your Productivity with KanbanGo </Title>
              <Text>
              Manage, Collab and visualise your projects right now
              </Text>
              <Button onClick={() => navigate("/register")}>
                LEARN MORE
              </Button>
            </LeftWrapper>
          </LeftSide>
          <RightSide>
            <SvgItem src="https://o.remove.bg/downloads/d5d37e18-e04a-47f8-9583-b26d39f8cfae/7505326-removebg-preview.png" />
          </RightSide>
        </Content>
      </Container>
    </>
  );
};

export default Index;
