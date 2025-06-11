import { ThemeProvider } from "@emotion/react";
import { useUnit } from "effector-react";
import { DARK_THEME, LIGHT_THEME } from "./lib/theme";
import { $main } from "./store/main";
import Background from "./components/Background";
import Resume from "./components/Resume";

export const App = () => {
  const { theme } = useUnit($main);

  return (
    <ThemeProvider theme={theme === "light" ? LIGHT_THEME : DARK_THEME}>
      <Background>
        <Resume />
      </Background>
    </ThemeProvider>
  );
};
