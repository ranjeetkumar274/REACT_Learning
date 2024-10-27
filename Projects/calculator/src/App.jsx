import styles from './App.module.css'
import './App.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  )
}

export default App
