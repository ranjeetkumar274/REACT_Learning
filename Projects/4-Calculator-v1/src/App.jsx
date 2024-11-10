
import styles from './App.module.css'
import Input from "./components/input"
import ButtonsContainer from './components/buttonsContainer'
function App() {
  return <div className={styles.calculator}>
    <Input></Input>
    <ButtonsContainer></ButtonsContainer>
  </div>
}

export default App
