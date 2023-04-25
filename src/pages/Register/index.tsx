import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import BtnHomePage from '../../components/BtnHomePage'
import { BtnSave, InputsForm, Notes } from '../../styles'
import { ContainerForm, FormAdd, Options } from './styles'
import * as enums from '../../utils/enums/Task'
import Task from '../../models/Task'
import { register } from '../../store/reducers/tasks'
import { useNavigate } from 'react-router-dom'

const Cadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [notes, setNotes] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Priority.NORMAL)
  const [amigos, setAmigos] = useState(enums.Status.FRIENDS)

  const registerTask = (evento: FormEvent) => {
    evento.preventDefault()
    const taskAdd = new Task(
      name,
      email,
      telefone,
      prioridade,
      amigos,
      notes,
      2
    )
    dispatch(register(taskAdd))
    navigate('/')
  }

  return (
    <ContainerForm
      style={{
        maxWidth: 1024,
        width: 1000,
        marginLeft: 180,
        backgroundColor: '#e6e6fa',
      }}
    >
      <h2>Cadastrar contato</h2>
      <FormAdd onSubmit={registerTask}>
        <Options>
          {Object.values(enums.Status).map((amigos) => (
            <div key={amigos}>
              <input
                value={amigos}
                name="amigos"
                type="radio"
                onChange={({ target }) =>
                  setAmigos(target.value as enums.Status)
                }
                id={amigos}
                defaultChecked={amigos === enums.Status.FRIENDS}
              />
              <label htmlFor={amigos}>{amigos}</label>
            </div>
          ))}
        </Options>
        <InputsForm
          value={name}
          onChange={({ target }) => setName(target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <InputsForm
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="E-mail"
        />
        <InputsForm
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="number"
          placeholder="Telefone"
        />
        <Options>
          {Object.values(enums.Priority).map((prioridade) => (
            <div key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={({ target }) =>
                  setPrioridade(target.value as enums.Priority)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Priority.NORMAL}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </div>
          ))}
        </Options>
        <Notes
          value={notes}
          onChange={({ target }) => setNotes(target.value)}
          placeholder="Descrição do contato"
        />
        <BtnSave type="submit">Adicionar</BtnSave>
        <BtnHomePage />
      </FormAdd>
    </ContainerForm>
  )
}

export default Cadastro
