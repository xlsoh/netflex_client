import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Nanum Gothic', sans-serif;
        font-size: 1rem;
		color:#fff;
        width:100%;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background: url(https://ifh.cc/g/lTFnf7.jpg);
        background-size:cover;
    }
`;
const Wrapper = styled.section`
  padding: 4em;
  background: black;
  border-radius: 40px;
  opacity: 0.8;
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: white;
  border: none;
  border-radius: 3px;
  width: 350px;
  height: 45px;
  opacity: 1;
`;
const Button = styled.button`
  padding: 0.5em;
  margin: 0.5em;
  background: gray;
  border: none;
  border-radius: 3px;
  width: 150px;
  height: 40px;
  opacity: 1;
  font-weight: bold;
  font-size: 15px;
`;

export { GlobalStyle, Wrapper, Input, Button };
