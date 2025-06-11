import { ResumeContainer, ResumeWrapper } from "../lib/styles";
import { HeaderBlock } from "../components/HeaderBlock";
import { MissionStatement } from "../components/MissionStatement";
import { Impacts } from "../components/Impacts";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { TechStackBlock } from "../components/TechStackBlock";
import { Languages } from "../components/Languages";
import { PersonalQuote } from "../components/PersonalQuote";

export const Resume = () => {
  return (
    <ResumeWrapper>
      <ResumeContainer>
        <HeaderBlock />
        <MissionStatement />
        <Impacts />
        <Experience />
        <Education />
        <TechStackBlock />
        <Languages />
        <PersonalQuote />
      </ResumeContainer>
    </ResumeWrapper>
  );
};
