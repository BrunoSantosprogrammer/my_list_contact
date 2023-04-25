import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  legend: string
  criterion: 'prioridade' | 'status' | 'todas'
  valor?: enums.Priority | enums.Status
}

const CardFilter = ({ legend, criterion, valor }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const checkActive = () => {
    const sameCriteria = filter.criterion === criterion
    const sameValue = filter.valor === valor
    return sameCriteria && sameValue
  }

  const countTasks = () => {
    if (criterion === 'todas') return tasks.itens.length
    if (criterion === 'prioridade') {
      return tasks.itens.filter((item) => item.priority === valor).length
    }

    if (criterion === 'status') {
      return tasks.itens.filter((item) => item.status === valor).length
    }
  }

  const filters = () => {
    dispatch(
      changeFilter({
        criterion,
        valor,
      })
    )
  }
  const active = checkActive()
  const counter = countTasks()
  return (
    <S.Card active={active} onClick={filters}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{legend}</S.Label>
    </S.Card>
  )
}

export default CardFilter
