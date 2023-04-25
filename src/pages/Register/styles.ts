import styled from 'styled-components'

export const ContainerForm = styled.div`
  display: block;
  background-color: red;
  text-align: center;

  h2 {
    margin: 20px;
  }

  @media (max-width: 768px) {
  }
`

export const FormAdd = styled.form`
  margin: 0 auto;
  max-width: 500px;
  font-weight: bold;
  font-size: 14px;
  color: rgb(0, 0, 0, 0.5);
  background-color: DarkGrey;
  padding: 20px;
  box-shadow: 10px 5px 5px rgb(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const Options = styled.div`
  display: flex;
  text-transform: capitalize;

  label {
    margin-right: 12px;
    margin-left: 4px;
  }
`
