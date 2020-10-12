import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Rubik', sans-serif;
  letter-spacing: 1px;
  padding: 10vh 10vw 0 10vw;
  color: #121314;
  margin: 0 auto;

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
    margin: 0 0 20px 0;
    font-size: 30px;
  }
}

`
