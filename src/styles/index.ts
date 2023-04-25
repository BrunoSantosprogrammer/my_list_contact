import styled, { createGlobalStyle } from 'styled-components'

import { Search } from '../containers/SideBar/styles'
import variables from './variables'
import { BtnCard } from '../components/Task/styles'

const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  list-style: none;
  text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  background-color: #e6e6fa;
  height: 100vh;

  @media (max-width: 768px) {
    display: block;
  }
`

export const FormContainer = styled.main`
  padding: 0 40px;
  background-color: #f0ffff;
  height: 100vh;
  overflow-y: scroll;

  @media (max-width: 768px) {
    overflow-y: hidden;
    height: 100%;
  }
`
export const InputsForm = styled(Search)`
  background-color: ${variables.lavanderColor};
  border: none;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`
export const Notes = styled.textarea`
  border: none;
  border: 1px solid #778899;
  font-size: 14px;
  line-height: 24px;
  resize: none;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  background-color: ${variables.lavanderColor};
  border-radius: 4px;
`

export const BtnSave = styled(BtnCard)`
  background-color: ${variables.greenColor};
`

export default GlobalStyle
