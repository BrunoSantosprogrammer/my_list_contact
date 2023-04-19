import Task from '../../components/Task'
import { FormContainer } from './styles'
import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    name: 'Bruno Santos',
    notes: 'amigo da faculdade',
    priority: enums.Priority.IMPORTANT,
    status: enums.Status.FAMILY,
  },
  {
    name: 'Bruno Santos',
    notes: 'amigo da faculdade',
    priority: enums.Priority.PRIORITY,
    status: enums.Status.FRIENDS,
  },
  {
    name: 'Bruno Santos',
    notes: 'amigo da faculdade',
    priority: enums.Priority.PRIORITY,
    status: enums.Status.WORK,
  },
]

const ToDoList = () => (
  <FormContainer>
    <h1>Lista de Contatos</h1>
    <ul>
      {tasks.map((t) => (
        <li key={t.name}>
          {' '}
          <Task
            name={t.name}
            notes={t.notes}
            priority={t.priority}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </FormContainer>
)

export default ToDoList
