import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import TaskManager from './components/TaskManager';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
