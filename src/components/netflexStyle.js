import styled from "styled-components";

//Home 화면
const homeButtonContainer = styled.div`
  margin: auto;
  padding: auto;
  display: flex;
  justify-content: space-between;
`;

const netflexButton = styled.div`
  margin-top: 20px;
  background-color: transparent;
  background: url (https://fontmeme.com/permalink/201118/92d70114149d73adda9075f76f137762.png);
  width: 242px;
  height: 85px;
`;

const mypageButton = styled.div`
  margin-top: 20px;
  background-color: transparent;
  background: url (https://ifh.cc/g/9eoWbD.jpg);
  width: 60px;
  height: 60px;
`;

const MovieListEntry = styled.header``;

export { homeButtonContainer, netflexButton, mypageButton, MovieListEntry };

//