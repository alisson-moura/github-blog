import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { theme } from "./styles/themes"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>

  )
}

export default App
