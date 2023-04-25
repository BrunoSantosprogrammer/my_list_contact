import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { BtnSave, InputsForm, Notes } from '../../styles'
import { remove, toEdit } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

export const Task = ({
  name: nameOriginal,
  email: emailOriginal,
  tel: telOriginal,
  notes: notesOriginal,
  priority,
  status,
  id,
}: Props) => {
  const dispath = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [notes, setNotes] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  useEffect(() => {
    if (notesOriginal.length > 0) {
      setNotes(notesOriginal)
    }
    if (nameOriginal.length > 0) {
      setName(nameOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telOriginal.length > 0) {
      setTel(telOriginal)
    }
  }, [notesOriginal, nameOriginal, emailOriginal, telOriginal])

  function cancelAnnotations() {
    setIsEditing(false)
    setNotes(notesOriginal)
    setName(nameOriginal)
    setEmail(emailOriginal)
    setTel(telOriginal)
  }

  return (
    <S.Card>
      <S.CardName>
        <InputsForm
          disabled={!isEditing}
          value={name}
          onChange={(evento) => setName(evento.target.value)}
          placeholder="Nome Completo"
        />
        <S.Tag parameter="prioridade" priority={priority}>
          {priority}
        </S.Tag>
        <S.Tag parameter="status" status={status}>
          {status}
        </S.Tag>
      </S.CardName>
      <InputsForm
        disabled={!isEditing}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        placeholder="Dígite o E-mail"
      />
      <InputsForm
        disabled={!isEditing}
        value={tel}
        type="number"
        onChange={(evento) => setTel(evento.target.value)}
        placeholder="Dígite o Telefone: (00) 00000 - 0000"
      />
      <Notes
        disabled={!isEditing}
        value={notes}
        onChange={(evento) => setNotes(evento.target.value)}
        placeholder="Anotações"
      />
      <S.NotesActions>
        {isEditing ? (
          <>
            <BtnSave
              onClick={() => {
                dispath(
                  toEdit({
                    notes,
                    name,
                    email,
                    tel,
                    id,
                    priority,
                    status,
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </BtnSave>
            <S.BtnCancel onClick={cancelAnnotations}>Cancelar</S.BtnCancel>
          </>
        ) : (
          <>
            <S.BtnCard onClick={() => setIsEditing(true)}>Editar</S.BtnCard>
            <S.BtnDelete onClick={() => dispath(remove(id))}>
              Excluir
            </S.BtnDelete>
          </>
        )}
      </S.NotesActions>
    </S.Card>
  )
}

export default Task
