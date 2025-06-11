import { Highlight, Section, SectionTitle } from "../lib/styles";

export const Education = () => {
  return (
    <Section>
      <SectionTitle>🎓 Education</SectionTitle>
      <p>
        <Highlight>Moscow Technological Institute</Highlight>, BSc in
        Information Security – Expected 2027
      </p>
      <p style={{ marginTop: 4 }}>
        <Highlight>College of Communications №54</Highlight>, Information
        Systems – 2023
      </p>
    </Section>
  );
};
