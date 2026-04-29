import { ThemeProvider as NextThemesProvider } from "next-themes"

export const ThemeProvider: typeof NextThemesProvider = ({
  children,
  ...props
}) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    {...props}
  >
    {children}
  </NextThemesProvider>
)
