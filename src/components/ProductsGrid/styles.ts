import styled from "styled-components";

export const Products = styled.section`
  display: flex;
  flex-wrap: wrap;
`
export const ProductGridItem = styled.div`
  padding: 2%;
  flex-grow: 1;
  flex-basis: 20%;
  max-width: 20%;
  @media (max-width: 920px) {
    flex-basis: 25%;
    max-width: 25%;

    //&:first-child,
    //&:nth-child(2) {
    //  flex-basis: 50%;
    //  max-width: 50%;
    //}
  }
  @media (max-width: 600px) {
    flex-basis: 50%;
    max-width: 50%;
  }

  background-color: #FFF;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
`
export const ProductImg = styled.img`
  width: 100%;
`
export const ProductInfo = styled.div`
  margin-top: auto;
  padding-top: 20px;
  text-align: center;
`
