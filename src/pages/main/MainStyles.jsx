import styled from "styled-components";

export const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 95%;
margin: 80px auto;
gap: 50px;
`
export const Card = styled.div`
border: 1px solid black;

h1 {
    font-size: 20px;
    margin-left: 20px;
}

p {
    font-size: 15px;
    margin-left: 20px;
}

`

export const Image = styled.img`
width: 100%;
`