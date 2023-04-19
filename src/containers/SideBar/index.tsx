import CardFilter from '../../components/CardFilter'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Search type="text" placeholder="Buscar" />
      <S.Filter>
        <CardFilter legend="familia" counter={1} />
        <CardFilter legend="amigos" counter={2} />
        <CardFilter legend="trabalho" counter={3} />
        <CardFilter legend="importante" counter={4} />
        <CardFilter legend="prioridade" counter={5} />
        <CardFilter legend="todas" counter={15} active />
      </S.Filter>
    </div>
  </S.Aside>
)
export default SideBar
