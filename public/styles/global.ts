import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-text: #FFDCAC;
    --color-background: #ADC7C6;
    --primary-color: #f171a2;
    --secondary-color: #FCAF45;
    --background-color: grey;
  }

/* REGULAR */
@font-face {
  font-family: 'Montserrat';
  src: url("$fonts/Montserrat/Montserrat-Regular.ttf");
  font-style:normal ;
  font-weight: 400;
  font-display: swap;
}

/* MEDIUM */
@font-face {
  font-family: 'Montserrat';
  src: url("$fonts/Montserrat/Montserrat-Medium.ttf");
  font-style:normal ;
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url("$fonts/Montserrat/Montserrat-MediumItalic.ttf");
  font-style:italic ;
  font-weight: 500;
  font-display: swap;
}

/* BOLD */
  @font-face {
    font-family: 'Montserrat';
    src: url("$fonts/Montserrat/Montserrat-Bold.ttf");
    font-style:normal ;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url("$fonts/Montserrat/Montserrat-BoldItalic.ttf");
    font-style:italic ;
    font-weight: 700;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
    transition: all 300ms ease-in-out;
    margin: 0;
    padding: 0;
  }
  
  html{
    background-color: var(--color-background);
    }

  body {
    margin:0;
    padding:0;

    font-family: 'Montserrat', sans-serif;
    color: #222;
    
    height: 100%;
    
    a {
      color: var(---secondary-color);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:active,
    a:hover {
      color: #000;
    }

    h1{
      color: var(--primary-color);
      font-weight: 700;
      font-size: clamp(2.5rem, 5vw, 5rem);
      margin: 1rem auto .5rem
    }
    h2{
      color: var(--primary-color);
      font-weight: 500;
      font-size: clamp(2rem, 5vw, 4.5rem);
      margin: 1.75rem auto 0.75rem
    }
    p {
      font-size: clamp(1rem, 5vw, 1.5rem);
      font-weight: 400;
      color: var(--color-text)
    }

  }
`
export default GlobalStyle
