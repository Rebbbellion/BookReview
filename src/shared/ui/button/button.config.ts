export interface ButtonConfig {
  title: string;
  type: "submit" | "reset" | "button";
  stylesClass: ButtonStylesClass;
}

export const enum ButtonStylesClass {
  Primary = "primary-button",
  Secondary = "secondary-button",
  Close = "close-button",
  Search = "search-button",
}
