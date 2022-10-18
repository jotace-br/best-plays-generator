import React from 'react'
import { HelloWorld } from 'pages/HelloWorld'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyles from './styles/global'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HelloWorld />
    </ThemeProvider>
  )
}

export default App
