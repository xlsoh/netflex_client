import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: #fafafa;
  border: none;
  width: 1450px;
  height: 100px;
  opacity: 1;
  box-shadow: 2px 2px 2px 2px #fafafa;
  align-items: center;
  font-size: 18px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Textarea = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: #fafafa;
  border: none;
  width: 1450px;
  height: 300px;
  opacity: 1;
  box-shadow: 2px 2px 2px 2px #fafafa;
  align-items: center;
  font-size: 18px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = styled.section`
  padding: 3.5em;
  background: #221f1f;
  border-radius: 15px;
  opacity: 0.9;
  align: middle;
  margin: 10px 40px 10px;
  &:hover {
    padding-top: 10rem;
    padding-bottom: 10rem;
    > div.sub-introduce {
      display: flex;
      flex-direction: column;
    }
    > div.like-button {
      display: flex;
      justify-content: center;
    }
  }
`;

export { Input, Wrapper, Textarea };
