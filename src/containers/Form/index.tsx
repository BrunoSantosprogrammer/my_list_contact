import Task from '../../components/Task'
import { FormContainer } from './styles'

const ToDoList = () => (
  <FormContainer>
    <h1>Lista de Contatos</h1>
    <ul>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
    </ul>
  </FormContainer>
)

export default ToDoList
