import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #add8e6;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100%;
  }
`
export const Filter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
export const Search = styled.input`
  padding: 8px;
  backgroundo-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #000;
  border-color: #87cefa;
  width: 100%;
  margin-bottom: 8px;
`
