import styled from 'styled-components'
import variables from '../../styles/variables'
import * as enums from '../../utils/enums/Task'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parameter: 'status' | 'prioridade'
}

function returnBackground(props: TagProps): string {
  if (props.parameter === 'prioridade') {
    if (props.priority === enums.Priority.PRIORITY) return variables.redColor
    if (props.priority === enums.Priority.IMPORTANT)
      return variables.orangeColor
  } else {
    if (props.status === enums.Status.FAMILY) return variables.PinkColor
    if (props.status === enums.Status.FRIENDS) return variables.yellowColor
    if (props.status === enums.Status.WORK) return variables.BrownColor
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #e6e6fa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`
export const Name = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => returnBackground(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`
export const Notes = styled.textarea`
  color: #778899;
  font-size: 14px;
  line-height: 24px;
  resize: none;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
`
export const NotesActions = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const BtnCard = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #778899;
  border-radius: 8px;
  margin-right: 8px;
`
export const BtnSave = styled(BtnCard)`
  background-color: ${variables.greenColor};
`
export const BtnDelete = styled(BtnCard)`
  background-color: ${variables.DarkRedColor};
`
export const BtnCancel = styled(BtnCard)`
  background-color: ${variables.redColor};
`
