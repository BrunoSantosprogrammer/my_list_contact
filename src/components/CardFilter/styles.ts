import styled from 'styled-components'
import { Props } from '.'

type PropsOffLegend = Omit<Props, 'counter' | 'legend'>

export const Card = styled.div<PropsOffLegend>`
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? '#FF0000' : '#87CEFA')};
  background-color: ${(props) => (props.active ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.active ? ' #FF0000' : ' #87CEFA')};
  border-radius: 8px;
`
export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`
export const Label = styled.span`
  font-size: 14px;
`
