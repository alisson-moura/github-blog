import { ThemeProvider } from "styled-components"
import { ProfileProvider } from "./contexts/profileContext"
import { Router } from "./router"
import { GlobalStyle } from "./styles/global"
import { theme } from "./styles/themes"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProfileProvider>
        <Router />
      </ProfileProvider>
    </ThemeProvider>

  )
}

export default App
