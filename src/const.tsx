export const textGrey = "#657485";
export const black = "#151317";
export const white = "#fff";
export const avatarGrey = "#3a394c";
export const inputBorderRadius = "0.3rem";

export const modalBgColorDark = "#212328";
export const modalBgColorLight = white;

export const closeBtnBgColorLight = "#f7fafc";
export const closeBtnBgColorDark = "#2b3138";

export const inputBgColorLight = "#edf2f9";
export const inputBgColorDark = black;

export const borderDark = "#2c3239";
export const borderLight = "#d9dde4";

export const themes = {
  light: {
    backgroundColor: modalBgColorLight,
    textColor: black,
    closeBtnBgColor: closeBtnBgColorLight,
    inputBgColor: inputBgColorLight,
    border: borderLight,
    inputTextColor: black,
    transferBtnBgColor: inputBgColorDark,
    transferBtnTextColor: white,
  },
  dark: {
    backgroundColor: modalBgColorDark,
    textColor: "#fff",
    closeBtnBgColor: closeBtnBgColorDark,
    inputBgColor: inputBgColorDark,
    border: borderDark,
    inputTextColor: white,
    transferBtnBgColor: inputBgColorLight,
    transferBtnTextColor: black,
  },
} as const;
