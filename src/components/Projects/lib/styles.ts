import styled from "@emotion/styled";

export const ProjectsWrapper = styled.div`
  width: 100vw;

  padding: 20px;

  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  max-width: 876px;

  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 36px;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  li {
    font-size: 24px;
  }

  a {
    text-decoration: none;
  }

  list-style: inside;
`;

export const Highlight = styled.span`
  color: #2563eb;
  font-weight: 600;

  transition: color 0.1s ease-in-out;

  :hover {
    color: #6494fa;
  }
`;
