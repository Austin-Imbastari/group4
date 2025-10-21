import styled from "styled-components";

export const EventContainer = styled.div`
  margin: 20px 10px;
  padding: 90px 80px;
  max-width: 300px;
  max-height: 300px;
  display: block;
  flex-direction: row;
  &:hover {
    border: 2px;
    border-style: solid;
    border-color: pink;
    box-shadow: -2px 2px 0px 0px;
  }
`;

export const EventTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url(${p => p.$bg});
`;

export const EventCenterContainer = styled.div`
  display: flex;
  justify-content: left;
`;

export const EventBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ParentContainer = styled.div`
  outline: 1px solid red;
  display: flex;
  flex-wrap: wrap;
`;
