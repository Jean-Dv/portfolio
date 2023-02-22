interface ThemeProviderProps {
  children: preact.ComponentChildren;
}

interface ThemeContextProps {
  theme: string;
  UpdateTheme: (theme: string) => void;
}

export { ThemeContextProps, ThemeProviderProps };
