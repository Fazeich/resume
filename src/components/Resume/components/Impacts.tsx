import React from "react";
import { Highlight, ImpactGrid, Section, SectionTitle } from "../lib/styles";

export const Impacts = () => {
  return (
    <Section>
      <SectionTitle>🚀 Impact in Numbers</SectionTitle>
      <ImpactGrid>
        <li>
          🧠 <Highlight>4+ years</Highlight> of production experience
        </li>
        <li>
          ⏱ Reduced onboarding time to <Highlight>~1 week</Highlight>
        </li>
        <li>
          📉 Cut UX-related complaints by <Highlight>40%</Highlight>
        </li>
        <li>
          🐞 Production bug rate: <Highlight>~1 per several months</Highlight>
        </li>
        <li>
          🚀 Increased performance by <Highlight>30%</Highlight> across multiple
          apps
        </li>
      </ImpactGrid>
    </Section>
  );
};
