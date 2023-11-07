import './App.css';
import Hello from './components/Hello';
import AppBar from './components/AppBar';
import Counter from './components/Counter';
import SecondPage from './components/SecondPage';
import FirstPage from './components/FirstPage';
import { useState } from 'react';
import { CustomHook } from './components/CustomHook';

function App() {
  const buttonNames = ["Home", "About", "Contact"];
  const [showFirstPage, setShowFirstPage] = useState(true);
  const [showSecondPage, setShowSecondPage] = useState(false);

  const handleClickFirstPage = () => {
    setShowFirstPage(true);
    setShowSecondPage(false);
  }

  const handleClickSecondPage = () => {
    setShowFirstPage(false);
    setShowSecondPage(true);
  }

  return (
    <div>
      <AppBar appName="MyApp" buttonNames={buttonNames} />
      {/* <Hello name="Tanay" isLoggedIn={true} />
      <Counter />
      <div className='pageName'>
        {showFirstPage && <FirstPage />}
        {showSecondPage && <SecondPage />}
      </div>
      <div className="btn-div">
        <button onClick={handleClickFirstPage}>ToggleFirstPage</button>
        <button onClick={handleClickSecondPage}>ToggleSecondPage</button>
      </div> */}
      <CustomHook/>
    </div>
  );
}

export default App;
