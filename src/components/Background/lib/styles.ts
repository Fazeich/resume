import styled from "@emotion/styled";

export const StyledCanvas = styled.canvas`
  position: absolute;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
`;

export const ChildrenWrapper = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  overflow: hidden;
  overflow-y: scroll;
`;
