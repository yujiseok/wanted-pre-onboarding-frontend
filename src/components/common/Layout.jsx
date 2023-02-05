import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <Main>
      <Container>
        <Outlet />
      </Container>
    </Main>
  );
};

const Main = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  flex: 1;
  max-width: 500px;
  padding: 24px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  margin-inline: 16px;
`;

export default Layout;
