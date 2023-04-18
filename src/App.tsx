import Form from './containers/Form'
import SideBar from './containers/SideBar'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <Form />
      </Container>
    </>
  )
}

export default App
