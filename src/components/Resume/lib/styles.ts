import styled from "@emotion/styled";

const ACCENT = "#818cf8";
const ACCENT_LIGHT = "#a5b4fc";
const ACCENT_VIOLET = "#c084fc";
const TEXT = "#e5e7eb";
const MUTED = "#9ca3af";
const SURFACE = "rgba(255, 255, 255, 0.04)";
const SURFACE_BORDER = "rgba(255, 255, 255, 0.08)";

export const ResumeWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 56px 20px 32px;

  color: ${TEXT};

  @media (max-width: 768px) {
    padding: 16px 12px;
  }
`;

export const ResumeContainer = styled.div`
  width: 100%;
  max-width: 880px;
  padding: 56px 64px;

  background: rgba(20, 20, 38, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border: 1px solid ${SURFACE_BORDER};
  border-radius: 24px;

  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  line-height: 1.6;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 32px 20px;
    border-radius: 18px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 48px;
  padding-bottom: 36px;

  border-bottom: 1px solid ${SURFACE_BORDER};
`;

export const Name = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.5px;
  margin-bottom: 12px;

  background: linear-gradient(135deg, #ffffff 30%, ${ACCENT_LIGHT} 70%, ${ACCENT_VIOLET});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const Title = styled.h2`
  font-size: 19px;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: ${ACCENT_LIGHT};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;

  color: ${MUTED};
  font-size: 15px;
`;

export const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  margin-top: 20px;

  font-size: 14px;

  & > a,
  & > span {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    padding: 7px 16px;

    color: ${TEXT};
    background: ${SURFACE};
    border: 1px solid ${SURFACE_BORDER};
    border-radius: 999px;

    text-decoration: none;

    transition:
      border-color 0.2s ease,
      background 0.2s ease,
      transform 0.2s ease;
  }

  /* visual separators are replaced by pill spacing */
  & > span:nth-of-type(odd) {
    display: none;
  }

  & > a:hover {
    border-color: ${ACCENT};
    background: rgba(129, 140, 248, 0.12);
    transform: translateY(-1px);
  }
`;

export const Section = styled.section`
  margin-bottom: 44px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 14px;

  font-size: 21px;
  font-weight: 700;
  letter-spacing: 0.2px;

  margin-bottom: 20px;

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(129, 140, 248, 0.55), transparent);
  }
`;

export const Highlight = styled.span`
  color: ${ACCENT_LIGHT};
  font-weight: 600;
`;

export const ImpactGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;

  list-style: none;

  li {
    padding: 16px;

    font-size: 15px;
    line-height: 1.5;

    background: ${SURFACE};
    border: 1px solid ${SURFACE_BORDER};
    border-radius: 14px;

    transition:
      border-color 0.2s ease,
      transform 0.2s ease;

    &:hover {
      border-color: rgba(129, 140, 248, 0.5);
      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ExperienceItem = styled.div`
  position: relative;

  padding-left: 28px;
  padding-bottom: 32px;

  border-left: 2px solid rgba(129, 140, 248, 0.25);

  &:last-of-type {
    padding-bottom: 4px;
  }

  &::before {
    content: "";
    position: absolute;
    left: -8px;
    top: 6px;

    width: 14px;
    height: 14px;
    border-radius: 50%;

    background: linear-gradient(135deg, ${ACCENT}, ${ACCENT_VIOLET});
    box-shadow: 0 0 0 4px rgba(20, 20, 38, 1), 0 0 16px rgba(129, 140, 248, 0.6);
  }

  & > p:last-of-type {
    margin-top: 14px;
    padding: 10px 14px;

    font-size: 14px;

    background: rgba(129, 140, 248, 0.08);
    border: 1px solid rgba(129, 140, 248, 0.18);
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

export const JobTitle = styled.h4`
  font-size: 19px;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 4px;
`;

export const JobMeta = styled.p`
  font-size: 14px;
  color: ${MUTED};
`;

export const List = styled.ul`
  list-style: disc;
  margin-left: 20px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li::marker {
    color: ${ACCENT};
  }
`;

export const Quote = styled.p`
  position: relative;

  margin-top: 8px;
  padding: 18px 22px;

  font-style: italic;
  font-size: 17px;
  line-height: 1.7;
  color: #d1d5db;

  background: rgba(129, 140, 248, 0.06);
  border-left: 3px solid ${ACCENT};
  border-radius: 0 12px 12px 0;
`;

export const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 12px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 18px 20px;

    background: ${SURFACE};
    border: 1px solid ${SURFACE_BORDER};
    border-radius: 14px;
  }
`;
