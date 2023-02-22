import { Signal, signal } from "@preact/signals";

export type Theme = "light" | "dark";

interface IAppContext {
  theme: Signal<Theme>;
  toggleTheme: () => void;
}

const theme = signal<Theme>("light");

const storedTheme = window.localStorage.getItem("theme") as Theme | null;
if (storedTheme) {
  theme.value = storedTheme;
  setCSSTheme(storedTheme);
}

function toggleTheme() {
  const newTheme = theme.value = theme.value === "light" ? "dark" : "light";
  theme.value = newTheme;
  window.localStorage.setItem("theme", newTheme);
  setCSSTheme(newTheme);
}

function setCSSTheme(theme: Theme) {
  const classList = document.documentElement.classList;
  classList.add(`${theme}Mode`);
  classList.remove(theme === "light" ? "darkMode" : "lightMode");
}

export const AppContext: IAppContext = {
  theme,
  toggleTheme,
};
