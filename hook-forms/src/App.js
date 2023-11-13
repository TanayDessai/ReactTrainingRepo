import logo from './logo.svg';
import './App.css';
import WithHooksForms from './components/WithHookForms';
import WithoutHookForm from './components/WithoutHookForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import NestedFirst from "./pages/NestedFirst";

function App() {
  return (
    // <div className="main-section">
    //   <div className="section-1">
    //     <WithHooksForms />
    //     {/* <WithoutHookForm/> */}
    //   </div>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* //nested Route below */}
        <Route path="firstPage">
          <Route path="" index element={<FirstPage />} />
          <Route path="nestedFirst/:id" element={<NestedFirst />} />
        </Route>
        <Route path="/secondPage" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
