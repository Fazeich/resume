import { ITheme } from "../lib/theme";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
