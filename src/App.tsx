import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { Article } from "./pages/Article"
import { Home } from "./pages/Home"
import { GlobalStyle } from "./styles/global"
import { theme } from "./styles/themes"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Article />
    </ThemeProvider>

  )
}

export default App
