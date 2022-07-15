import styled from "styled-components";

export const Wrapper = styled.div`
 width: 60%;
 margin: auto;
 border: 1px solid black;
 display: flex;
 flex-direction: row;
 padding: 10px;
 justify-content: space-between;

`

export const Image = styled.div`
 img {
    width: 300px;
 }
`

export const Info = styled.div`
border: 1px solid black;
width: 700px;
padding: 10px;
line-height: 0.5;
h1 {
    font-size: 20px;
}

p {
    &:nth-child(0) {
        font-style: italic;
}
`

export const Address = styled.div`
border: 1px solid black;
width: 200px;
line-height: 0.9;
padding: 10px;

h1 {
    font-size: 20px;
}
`