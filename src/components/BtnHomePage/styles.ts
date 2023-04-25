import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variables from '../../styles/variables'

export const BtnHome = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 64px;
  width: 64px;
  background-color: ${variables.BrownColor};
  color: #fff;
  position: fixed;
  cursor: pointer;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
`
