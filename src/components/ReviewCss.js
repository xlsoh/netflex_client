import styled from "styled-components";

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

export { Wrapper };
