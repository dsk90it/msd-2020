import { createGlobalStyle } from 'styled-components'
import { theme } from './_theme'

const GlobalStyle = createGlobalStyle`
   *, *:before, *:after {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
   }
   html{
      -webkit-tap-highlight-color: transparent;
   }
   body{
      margin: 0;
      padding: 0;
      font-family: ${theme.fontDefault};
      font-weight: ${theme.regular};
      font-size: ${theme.baseFontSize};
      color: ${theme.baseColor};
   }
   header, footer, section{
      display: block;
   }
   a, button {
      transition: all 0.2s;
   }
   a, a:hover, a:focus {
      text-decoration: none;
      outline: 0 none;
   }
   b, strong, h1, h2, h3, h4, h5, h6 {
      font-weight: ${theme.semiBold};
   }
   .img-responsive{
      max-width: 100%;
      height: auto;
   }
   .text-center{
      text-align: center;
   }
   .regular{
      font-weight: ${theme.regular};
   }
   .pull-right{
      float: right;
   }
`

export default GlobalStyle
