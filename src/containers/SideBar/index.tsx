import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Search
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(evento) => dispatch(changeTerm(evento.target.value))}
        />
        <S.Filter>
          <CardFilter
            valor={enums.Status.FAMILY}
            criterion="status"
            legend="familia"
          />
          <CardFilter
            valor={enums.Status.FRIENDS}
            criterion="status"
            legend="amigos"
          />
          <CardFilter
            valor={enums.Status.WORK}
            criterion="status"
            legend="trabalho"
          />
          <CardFilter
            valor={enums.Priority.IMPORTANT}
            criterion="prioridade"
            legend="importante"
          />
          <CardFilter
            valor={enums.Priority.PRIORITY}
            criterion="prioridade"
            legend="prioridade"
          />
          <CardFilter
            criterion="todas"
            legend="todas"
            valor={enums.Priority.NORMAL}
          />
        </S.Filter>
      </div>
    </S.Aside>
  )
}
export default SideBar
