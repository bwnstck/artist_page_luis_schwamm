import { createGlobalStyle } from 'styled-components'
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

const GlobalStyle = createGlobalStyle`
  :root {
    --color-text: black;
    --color-background: lightgray;
    --primary-color: #f171a2;
    --secondary-color: blue;
    --background-color: grey;
  }

  * {
    transition: all 300ms ease-in-out;
  }

  body {
    margin:0;
    padding:0;

    font-family: 'Montserrat', sans-serif;
    color: #222;
    
    background-color: black;
    height: 100%;
    
    a {
      color: #9b9b9b;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:active,
    a:hover {
      color: #000;
    }

    h1{
      color: var(--primary-color);
      font-size: clamp(2.5rem, 5vw, 5rem);
      margin: 2rem auto 1rem
    }
    p {
      font-size: clamp(1rem, 5vw, 1.5rem);
    }

  }
`
export default GlobalStyle
