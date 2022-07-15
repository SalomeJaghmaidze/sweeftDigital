import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  border: 1px solid #ccc;
`;

export const Image = styled.div`
  img {
    width: 300px;
  }
`;

export const Info = styled.fieldset`
  padding: 10px;
  line-height: 0.5;
  width: 50%;
  height: auto;
  h1 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
    font-style: italic;
    font-weight: normal;
  }

  span {
    text-decoration: underline;
    font-size: 18px;
  }
`;

export const Address = styled.fieldset`
  width: 15%;
  line-height: 0.7;
  word-break: normal;
  height: auto;
  h3 {
    font-size: 18px;
    margin: 0;
    line-height: 1;
  }
  span {
    text-decoration: underline;
    font-size: 18px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: auto;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.div`
  width: 100%;
  h2 {
    font-size: 25px;
    width: 95%;
    margin: auto;
    margin-top: 50px;
  }
`;

export const Sequence = styled.div`
  margin-left: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;
