import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312e38;
    color: #fff;
  }
  body, input, button{
    font-family: serif;
    font-size: 16;
  }



  button{
    cursor: pointer;
  }
`;
