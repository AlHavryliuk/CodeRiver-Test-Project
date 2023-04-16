import { createGlobalStyle } from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixins';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Jomhuria&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');

    h3{
        font-family: 'Jomhuria', cursive;
    }

    h4 {
        font-family: 'Oswald', sans-serif;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #1E1E1E; 
        padding: 105px 0;

        ${mobile`
          padding: 20px 0;
        `}

        
    }
  `;
