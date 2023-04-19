import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'

type Props = {
  name: string
  priority: enums.Priority
  status: enums.Status
  notes: string
}

const Task = ({ name, notes, priority, status }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <S.Card>
      <S.Name>{name}</S.Name>
      <S.Tag parameter="prioridade" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Notes value={notes} />
      <S.NotesActions>
        {isEditing ? (
          <>
            <S.BtnSave>Salvar</S.BtnSave>
            <S.BtnCancel onClick={() => setIsEditing(false)}>
              Cancelar
            </S.BtnCancel>
          </>
        ) : (
          <>
            <S.BtnCard onClick={() => setIsEditing(true)}>Editar</S.BtnCard>
            <S.BtnDelete>Excluir</S.BtnDelete>
          </>
        )}
      </S.NotesActions>
    </S.Card>
  )
}

export default Task
