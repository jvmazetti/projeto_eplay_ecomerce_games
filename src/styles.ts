import { createGlobalStyle } from 'styled-components'

export const Cores = {
  branca: '#eeeeee',
  preta: '#111111',
  cinza: '#333333',
  verde: '#10ac84'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Cores.preta};
    color: ${Cores.branca};
    padding-top: 40px;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
