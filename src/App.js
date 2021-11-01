import './css/App.css';
import Choice from "./components/choice";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Answer from "./components/answer";

function App() {

  const [choice, setChoice] = useState('')
  const [opts, setOpts] = useState([])
  const [popQuestion, setPop] = useState([])

  // useEffect(() => {
  //   setPop(JSON.parse(localStorage.getItem("popQuestion")))
  // }, [popQuestion])

  function saveOpt(data) {
    setOpts(data)
  }

  function saveQ(q) {
    setChoice(q)
  }


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Choice Maker App</h1>
          <Switch>
            <Route exact path='/'>
              <Choice handleQuest={saveQ} handleOption={saveOpt} popQ={popQuestion} handlePop={setPop} />
            </Route>
            <Route path='/answer'>
              <Answer question={choice} options={opts} />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
