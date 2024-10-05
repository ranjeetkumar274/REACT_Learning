import KgButton from "./KgButton";
import { Hello } from "./Hello";
import Random from "./Random";

function App(){
  return <div className="container">
    <h1>This is the best react course.</h1>
    <KgButton></KgButton>

    <Hello></Hello>

    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>

    {/* reusability test with Random.jsx */}
  </div>
}

export default App; 