import { styled } from 'styled-components'

import './App.css'
import AnimatedBoxes from './components/AnimatedBoxes'
import AnimatedInView from './components/AnimatedInView'
import AnimatedTransition from './components/AnimatedTransition'

function App() {
  return (
    <Main>
      <AnimatedBoxes />
      <AnimatedTransition />
      <AnimatedInView />
    </Main>
  )
}

export default App


const Main = styled.div`
  width: 80%;
  margin: 0 auto;
  color: #ffffee;
  display: flex;
  flex-direction: column;
  gap: 50px;
`