import { useState } from 'react'
import * as S from './styles'

const Task = () => {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <S.Card>
      <S.Name>NOME</S.Name>
      <S.Tag>IMPORTANTE</S.Tag>
      <S.Tag>PENDENTE</S.Tag>
      <S.Notes />
      <S.NotesActions>
        {isEditing ? (
          <>
            <S.BtnCard>Salvar</S.BtnCard>
            <S.BtnCard onClick={() => setIsEditing(false)}>Cancelar</S.BtnCard>
          </>
        ) : (
          <>
            <S.BtnCard onClick={() => setIsEditing(true)}>Editar</S.BtnCard>
            <S.BtnCard>Excluir</S.BtnCard>
          </>
        )}
      </S.NotesActions>
    </S.Card>
  )
}

export default Task
