import React from "react";
import {
  ExperienceItem,
  Highlight,
  JobMeta,
  JobTitle,
  List,
  Quote,
  Section,
  SectionTitle,
} from "../lib/styles";

export const Experience = () => {
  return (
    <Section>
      <SectionTitle>💼 Experience</SectionTitle>
      <ExperienceItem>
        <JobTitle>Sber — Middle+ Frontend Engineer</JobTitle>
        <JobMeta>📍 Moscow | Feb 2024 – Present</JobMeta>
        <JobMeta>
          Fintech • High-load React app for customer complaints processing
        </JobMeta>
        <List>
          <li>
            Led complete redesign and refactoring of frontend architecture —{" "}
            <Highlight>doubled feature delivery speed</Highlight>.
          </li>
          <li>
            Initiated release strategy and QA policies, reducing production bugs
            to <Highlight>nearly zero</Highlight>.
          </li>
          <li>
            Built internal libraries for DX tools and tests, enabling dev
            onboarding in <Highlight>~1 week</Highlight>.
          </li>
          <li>
            Drove UX transformation, reducing friction and lowering complaint
            rate.
          </li>
          <li>
            Unified standards across frontend teams, increasing collaboration
            efficiency.
          </li>
        </List>
        <Quote>
          "Vlad brought structure to chaos. The frontend became not only stable,
          but future-proof." – Product Lead
        </Quote>
        <p>
          <Highlight>🛠 Tech:</Highlight> React, TypeScript, MobX, Vite, Module
          Federation, MUI, Emotion
        </p>
      </ExperienceItem>
      <ExperienceItem>
        <JobTitle>Digital League — Junior → Middle Frontend Engineer</JobTitle>
        <JobMeta>📍 Moscow | Jan 2022 – Feb 2024</JobMeta>
        <JobMeta>Edtech • Employee onboarding and training platform</JobMeta>
        <List>
          <li>
            Shipped urgent fixes that saved contracts and unlocked extra
            funding.
          </li>
          <li>
            Mentored junior devs and built guidebooks + dev onboarding flows.
          </li>
          <li>
            Increased app speed by <Highlight>30%</Highlight> through smart
            refactoring.
          </li>
          <li>Introduced dark mode + mobile UX, boosting engagement.</li>
          <li>Developed reusable UI modules adopted across teams.</li>
        </List>
        <p>
          <Highlight>🛠 Tech:</Highlight> React, TypeScript, Effector, Next.js,
          Webpack, Ant Design
        </p>
      </ExperienceItem>
    </Section>
  );
};
