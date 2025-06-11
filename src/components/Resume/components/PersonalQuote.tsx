import React from "react";
import { Quote, Section, SectionTitle } from "../lib/styles";

export const PersonalQuote = () => {
  return (
    <Section>
      <SectionTitle>✨ Personal Quote</SectionTitle>
      <Quote>
        "I make complex systems simple — for users and for dev teams. I bring
        clarity where there's clutter, and structure where there's spaghetti."
      </Quote>
    </Section>
  );
};
