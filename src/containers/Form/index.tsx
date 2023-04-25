import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { FormContainer } from '../../styles'
import { RootReducer } from '../../store'

const ToDoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, criterion, valor } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTask = () => {
    let filteredTasks = itens
    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.name.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (criterion === 'prioridade') {
        filteredTasks = filteredTasks.filter((item) => item.priority === valor)
      } else if (criterion === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === valor)
      }
      return filteredTasks
    } else {
      return itens
    }
  }
  return (
    <FormContainer>
      <h1>Lista de Contatos</h1>
      <ul>
        {filterTask().map((t) => (
          <li key={t.name}>
            {' '}
            <Task
              name={t.name}
              email={t.email}
              tel={t.tel}
              notes={t.notes}
              priority={t.priority}
              status={t.status}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </FormContainer>
  )
}

export default ToDoList
