import {BrowserRouter,Routes,Route} from "react-router-dom";
import {ShowTaskList} from "./components/ShowTaskList";
import CreateTask from "./components/CreateTask";
import "./App.scss";

function App() {
  return (
    <div className="app-contents">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<ShowTaskList/>}/>
        <Route path="/create-task" element={<CreateTask/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
