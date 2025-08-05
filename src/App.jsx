import React from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme'
import Layout from './pages/Layout'

function App() {

  return (
    <>
    <ThemeProvider  theme={lightTheme}>
      <Layout>
        <h1>Welcome to My Portfolio</h1>
        <p>This is a showcase of my work.</p>
      </Layout>
    </ThemeProvider >
    </>
  )
}

export default App
