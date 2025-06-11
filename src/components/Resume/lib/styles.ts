import styled from "@emotion/styled";

export const ResumeWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 20px;

  color: white;

  overflow: hidden;
  overflow-y: scroll;
`;

export const ResumeContainer = styled.div`
  max-width: 896px;
  padding: 24px;
  background: inherit;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 768px) {
    margin: 16px;
    padding: 16px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 32px;
`;

export const Name = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 12px;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  flex-wrap: wrap;

  a {
    color: #2563eb;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Section = styled.section`
  margin-bottom: 32px;
`;

export const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  border-bottom: 2px solid #d1d5db;
  padding-bottom: 8px;
  margin-bottom: 16px;
`;

export const Highlight = styled.span`
  color: #2563eb;
  font-weight: 600;
`;

export const ImpactGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;

export const ExperienceItem = styled.div`
  margin-bottom: 24px;
`;

export const JobTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
`;

export const JobMeta = styled.p`
  font-style: italic;
`;

export const List = styled.ul`
  list-style: disc;
  margin-left: 24px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Quote = styled.p`
  font-style: italic;
  margin-top: 8px;
`;

export const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;
