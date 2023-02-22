import { signal } from "@preact/signals";
import { AppContext } from "../contexts/ThemeContext.tsx";

export default function ThemeChange() {
  const { theme, toggleTheme } = AppContext;
  return (
    <img
      class="header__icon"
      src={theme === signal("light") ? "/images/moon.png" : "/images/day.png"}
      alt="icon"
      onClick={() => {
        toggleTheme();
      }}
    />
  );
}
