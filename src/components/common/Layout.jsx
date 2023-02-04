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
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  flex: 1;
  max-width: 500px;
  padding: 24px;
  background-color: white;
  border-radius: 6px;
  /* box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); */
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  margin-inline: 16px;
  /* height: 600px; */
`;

export default Layout;
