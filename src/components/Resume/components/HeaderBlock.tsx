import { ContactInfo, ContactLinks, Header, Name, Title } from "../lib/styles";

export const HeaderBlock = () => {
  return (
    <Header>
      <Name>Vladislav Samsonov</Name>
      <Title>Frontend Engineer | React & TypeScript Specialist</Title>
      <ContactInfo>
        <p>Moscow, Russia | Open to Remote & Relocation</p>
      </ContactInfo>
      <ContactLinks>
        <a href="mailto:vladislavchenko@inbox.ru">
          📧 vladislavchenko@inbox.ru
        </a>
        <span>|</span>
        <span>📱 +7 (999) 772-88-32</span>
        <span>|</span>
        <a href="https://t.me/samsyaaa">💬 @samsyaaa</a>
      </ContactLinks>
    </Header>
  );
};
