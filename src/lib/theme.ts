export interface ITheme {
  background: {
    primary: string;
    secondary: string;
    additional: string;
  };
  text: string;
  border: string;
  buttons: {
    color: string;
    hover: string;
  };
}

// export const LIGHT_THEME: ITheme = {
//   background: {
//     primary: "#f0f3d5",
//     secondary: "#f6f7c9",
//     additional: "#f7f7da",
//   },
//   text: "#1a1a1a",
//   border: "#dcdcdc",
//   buttons: {
//     color: "#4a90e2",
//     hover: "#207ae0",
//   },
// };
export const LIGHT_THEME: ITheme = {
  background: {
    primary: "#F9FAFB",
    secondary: "#EDE9FE",
    additional: "#F5F3FF",
  },
  text: "#2C2E33",
  border: "#E5E7EB",
  buttons: {
    color: "#A5B4FC",
    hover: "#7C3AED",
  },
};

export const DARK_THEME: ITheme = {
  background: {
    primary: "#1E1E2F",
    secondary: "#2E3350",
    additional: "#3B3B5C",
  },
  text: "#E5E7EB",
  border: "#4B5563",
  buttons: {
    color: "#A5B4FC",
    hover: "#C4B5FD",
  },
};
