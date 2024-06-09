import { useState } from "react";
import { Theme } from "../types";

export const useSettings = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  const updateTheme = () => {
    setTheme((current) => {
      if (current === "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  };

  return {
    theme,
    updateTheme,
  };
};
