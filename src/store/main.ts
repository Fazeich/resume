import { createEvent, createStore } from "effector";

export interface IMainStore {
  theme: "light" | "dark";
}

export const $main = createStore<IMainStore>({
  theme: "dark",
});

export const changeTheme = createEvent();

$main.on(changeTheme, (state) => {
  const newTheme = state.theme === "light" ? "dark" : "light";

  return {
    ...state,
    theme: newTheme,
  };
});
