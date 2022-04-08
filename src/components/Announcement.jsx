import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #F94892;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Savings! Flat 50% Off</Container>;
};

export default Announcement;
