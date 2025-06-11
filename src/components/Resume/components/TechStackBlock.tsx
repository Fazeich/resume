import React from "react";
import { Highlight, Section, SectionTitle, TechStack } from "../lib/styles";

export const TechStackBlock = () => {
  return (
    <Section>
      <SectionTitle>🧠 Tech Stack</SectionTitle>
      <TechStack>
        <div>
          <p>
            <Highlight>Frameworks:</Highlight> React, Next.js, React Native
          </p>
          <p>
            <Highlight>State management:</Highlight> Effector, MobX, Redux,
            Redux Toolkit
          </p>
          <p>
            <Highlight>Languages:</Highlight> TypeScript, JavaScript (ES6+),
            HTML, CSS
          </p>
          <p>
            <Highlight>Styling:</Highlight> Emotion, MUI, Ant Design, SCSS
          </p>
        </div>
        <div>
          <p>
            <Highlight>Tooling:</Highlight> Vite, Webpack, Git, Jest, Storybook
          </p>
          <p>
            <Highlight>Architecture:</Highlight> Clean Code, Module Federation,
            Component Systems
          </p>
          <p>
            <Highlight>Other:</Highlight> Node.js, REST, Agile, Scrum, CI/CD
          </p>
        </div>
      </TechStack>
    </Section>
  );
};
