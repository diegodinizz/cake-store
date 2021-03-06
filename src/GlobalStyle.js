import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Rubik', sans-serif;
  letter-spacing: 1px;
  padding: 4rem;
  color: #121314;
  margin: 0 auto;
  background-color: #f6f6f6;

  @media (max-width: 800px) {
    margin: 1em;
    padding: 0;
  }
}

h1 {
  text-align: center;
  font-size: 40px;
  color: #41444b;
  margin: 0 0 30px 0;

  @media (max-width: 800px) {
    margin: 20px 0;
    font-size: 30px;
  }
}

`
