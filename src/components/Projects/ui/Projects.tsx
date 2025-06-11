import React from "react";
import { Highlight, List, ProjectsWrapper, Title } from "../lib/styles";

export const Projects = () => {
  return (
    <ProjectsWrapper>
      <Title>My Other Projects</Title>
      <List>
        <li>
          <a href={"https://fazeich.github.io/portfolio"} target="_blank">
            <Highlight>Portfolio</Highlight>
          </a>
        </li>
        <li>
          <a href={"https://fazeich.github.io/markdown-editor"} target="_blank">
            <Highlight>Markdown Editor</Highlight>
          </a>
        </li>
      </List>
    </ProjectsWrapper>
  );
};
