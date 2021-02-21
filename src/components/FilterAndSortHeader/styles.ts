import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  padding: 30px 0;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`
export const H1 = styled.h1`
  flex-grow: 1;
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`

export const Sort = styled.div`
  display: flex;
  align-self: flex-end;
  @media (max-width: 480px) {
    align-self: flex-start;
  }
`

export const CollectionSort = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    padding-right: 20px;
  }
`
export const Label = styled.label`
  color: #666;
  font-size: 10px;
  font-weight: 500;
  line-height: 2em;
  text-transform: uppercase;
`
